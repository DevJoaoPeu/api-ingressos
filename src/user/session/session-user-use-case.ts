import { EmailOrPasswordIncorrect } from "@/erros/errors"
import { FindUserByEmailRepository } from "../findUserByEmail/find-user-by-email-repository"
import { ISessionUserParams } from "@/user/type"
import { compare } from "bcrypt"
import { token } from "../helper/auth/token"

export class SessionUserUseCase {
  constructor(
    private readonly findUserByEmailRepository: FindUserByEmailRepository
  ) {}

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

    const tokenJwt = token(isValidUser.id, sessionUserParams.email)

    const user = {
      token: tokenJwt,
    }

    return user
  }
}
