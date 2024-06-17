import { CreateUserController } from "@/user/createUser/create-user-controller"
import { CreateUserRepository } from "@/user/createUser/create-user-repository"
import { CreateUserUseCase } from "@/user/createUser/create-user-use-case"
import { FindUserByEmailRepository } from "@/user/findUserByEmail/find-user-by-email-repository"

export const makeCreateUserController = () => {
  const createUserRepository = new CreateUserRepository()
  const findUserByEmailRepository = new FindUserByEmailRepository()
  const createUserUseCase = new CreateUserUseCase(
    createUserRepository,
    findUserByEmailRepository
  )

  const createUserController = new CreateUserController(createUserUseCase)
  return createUserController
}
