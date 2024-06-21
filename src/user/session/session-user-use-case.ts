import { ok } from "@/erros/helpers/http"
import { FindUserByEmailRepository } from "../findUserByEmail/find-user-by-email-repository"
import { userNotFoundResponse } from "@/erros/helpers/validation"
import { ISessionUserParams } from "@/types/user/type"
import { compare } from "bcrypt"
import {sign} from 'jsonwebtoken'

export class SessionUserUseCase {
  constructor(
    private readonly findUserByEmailRepository: FindUserByEmailRepository
  ) {
    this.findUserByEmailRepository = findUserByEmailRepository
  }

  async execute(sessionUserParams: ISessionUserParams) {
    const isValidUser = await this.findUserByEmailRepository.execute(
      sessionUserParams.email
    )

    const passMatch = await compare(sessionUserParams.password, isValidUser?.password as string)

    if (
      !sessionUserParams.email === !isValidUser?.email &&
      !sessionUserParams.password === !passMatch
    ) {
      return userNotFoundResponse()
    }

    const token = sign(
    {
      name: isValidUser.name,
      email: isValidUser.email
    } ,
    process.env.JWT_SECRET as string,
    { subject: isValidUser?.id, expiresIn: '30d'}
  )

    const user = {
      ...isValidUser,
      token
    }

    return user
  }
}
