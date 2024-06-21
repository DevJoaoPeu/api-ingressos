import { CreateUserController } from "@/user/createUser/create-user-controller"
import { CreateUserRepository } from "@/user/createUser/create-user-repository"
import { CreateUserUseCase } from "@/user/createUser/create-user-use-case"
import { FindUserByEmailRepository } from "@/user/findUserByEmail/find-user-by-email-repository"
import { UpdateUserController } from "@/user/updateUser/update-user-controller"
import { UpdateUserRepository } from "@/user/updateUser/update-user-repository"
import { UpdateUserUseCase } from "@/user/updateUser/update-user-use-case"

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

export const makeUpdateUserController = () => {
  const updateUserRepository = new UpdateUserRepository()
  const findUserByEmailRepository = new FindUserByEmailRepository()

  const updateUserUseCase = new UpdateUserUseCase(
    updateUserRepository,
    findUserByEmailRepository
  )

  const updateUserController = new UpdateUserController(updateUserUseCase)
  return updateUserController
}
