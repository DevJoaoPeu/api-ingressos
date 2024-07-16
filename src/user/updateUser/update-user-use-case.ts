import { FindUserByEmailRepository } from "../findUserByEmail/find-user-by-email-repository"
import { UpdateUserRepository } from "./update-user-repository"
import { EmailAlreadyExists } from "../../erros/errors"
import { hash } from "bcrypt"
import { User } from "@prisma/client"

export class UpdateUserUseCase {
  constructor(
    private readonly updateUserRepository: UpdateUserRepository,
    private readonly findUserByEmailRepository: FindUserByEmailRepository
  ) {}
  async execute(userId: string, updateUserParams: Partial<User>) {
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
