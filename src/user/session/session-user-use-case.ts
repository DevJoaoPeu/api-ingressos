import { FindUserByEmailRepository } from "../findUserByEmail/find-user-by-email-repository"
import { userNotFoundResponse } from "@/erros/helpers/validation"
import { ISessionUserParams } from "@/types/user/type"

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

    if (
      !sessionUserParams.email === !isValidUser?.email &&
      !sessionUserParams.password === !isValidUser?.password
    ) {
      return userNotFoundResponse()
    }

    // const user = {
    //   ...isValidUser,
    // }
  }
}
