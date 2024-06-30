import { ICreateUserParams } from "@/user/type"
import { FindUserByEmailRepository } from "../findUserByEmail/find-user-by-email-repository"
import { UpdateUserRepository } from "./update-user-repository"
import { EmailAlreadyExists } from "@/erros/user/errors"
import { hash } from "bcrypt"

export class UpdateUserUseCase {
  constructor(
    private readonly updateUserRepository: UpdateUserRepository,
    private readonly findUserByEmailRepository: FindUserByEmailRepository
  ) {
    this.updateUserRepository = updateUserRepository
    this.findUserByEmailRepository = findUserByEmailRepository
  }
  async execute(userId: string, updateUserParams: Partial<ICreateUserParams>) {
    if (updateUserParams.email) {
      const userWithProvidedEmail =
        await this.findUserByEmailRepository.execute(updateUserParams.email)

      if (userWithProvidedEmail && userWithProvidedEmail.id !== userId) {
        throw new EmailAlreadyExists(updateUserParams.email)
      }
    }

    const user = { ...updateUserParams }

    if (updateUserParams.password) {
      const hashedPassword = await hash(updateUserParams.password, 10)
      user.password = hashedPassword
    }

    const updateUser = await this.updateUserRepository.execute(userId, user)
    return updateUser
  }
}
