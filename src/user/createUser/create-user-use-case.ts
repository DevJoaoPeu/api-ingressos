import { CreateUserRepository } from "./create-user-repository"
import { FindUserByEmailRepository } from "@/user/findUserByEmail/find-user-by-email-repository"
import { EmailAlreadyExists } from "@/erros/errors"
import { hash } from "bcrypt"
import { User } from "@prisma/client"
import { token } from "../helper/auth/token"

export class CreateUserUseCase {
  constructor(
    private readonly createUserRepository: CreateUserRepository,
    private readonly findUserByEmailRepository: FindUserByEmailRepository
  ) {}

  async execute(createUserParams: User) {
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

    const tokenJwt = token(
      createdUser.id,
      createUserParams.email,
      createUserParams.role
    )

    const createUser = {
      ...createdUser,
      tokenJwt,
    }

    return createUser
  }
}
