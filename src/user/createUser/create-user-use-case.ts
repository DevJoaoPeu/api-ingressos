import { ICreateUserParams } from "@/types/user/type"
import { CreateUserRepository } from "./create-user-repository"
import { FindUserByEmailRepository } from "@/user/findUserByEmail/find-user-by-email-repository"
import { EmailAlreadyExists } from "@/erros/user/errors"
import { hash } from "bcrypt"

export class CreateUserUseCase {
  constructor(
    private readonly createUserRepository: CreateUserRepository,
    private readonly findUserByEmailRepository: FindUserByEmailRepository
  ) {
    this.createUserRepository = createUserRepository
    this.findUserByEmailRepository = findUserByEmailRepository
  }

  async execute(createUserParams: ICreateUserParams) {
    const userWithProvidedEmail = await this.findUserByEmailRepository.execute(
      createUserParams.email
    )

    if (userWithProvidedEmail) {
      throw new EmailAlreadyExists(createUserParams.email)
    }

    const hashedPassword = await hash(createUserParams.password, 10)

    const user = {
      ...createUserParams,
      password: hashedPassword,
    }

    const createdUser = await this.createUserRepository.execute(user)

    return createdUser
  }
}
