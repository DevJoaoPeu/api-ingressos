import { EmailOrPasswordIncorrect } from "@/erros/user/errors"
import { FindUserByEmailRepository } from "../findUserByEmail/find-user-by-email-repository"
import { ISessionUserParams } from "@/user/type"
import { compare } from "bcrypt"
import { sign } from "jsonwebtoken"

export class SessionUserUseCase {
  constructor(
    private readonly findUserByEmailRepository: FindUserByEmailRepository
  ) {
    this.findUserByEmailRepository = findUserByEmailRepository
  }

  token(id: string, email: string) {
    const token = sign(
      {
        email: email,
      },
      process.env.JWT_SECRET as string,
      {
        subject: id,
        expiresIn: "30d",
      }
    )

    return token
  }

  async execute(sessionUserParams: ISessionUserParams) {
    const isValidUser = await this.findUserByEmailRepository.execute(
      sessionUserParams.email
    )

    if (
      !isValidUser ||
      !(await compare(sessionUserParams.password, isValidUser.password))
    ) {
      throw new EmailOrPasswordIncorrect(sessionUserParams.email)
    }

    const tokenJwt = this.token(isValidUser.id, sessionUserParams.email)

    const user = {
      id: isValidUser.id,
      email: isValidUser.email,
      token: tokenJwt,
    }

    return user
  }
}
