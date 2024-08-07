import { CreateUserController } from "../user/createUser/create-user-controller"
import { CreateUserRepository } from "../user/createUser/create-user-repository"
import { CreateUserUseCase } from "../user/createUser/create-user-use-case"
import { DeleteUserController } from "../user/deleteUser/delete-user-controller"
import { DeleteUserRepository } from "../user/deleteUser/delete-user-repository"
import { DeleteUserUseCase } from "../user/deleteUser/delete-user-use-case"
import { FindUserByEmailRepository } from "../user/findUserByEmail/find-user-by-email-repository"
import { FindUserByIdController } from "../user/findUserById/find-user-by-id-controller"
import { FindUserByIdRepository } from "../user/findUserById/find-user-by-id-repository"
import { FindUserByIdUseCase } from "../user/findUserById/find-user-by-id-use-case"
import { SessionUserController } from "../user/session/session-user-controller"
import { SessionUserUseCase } from "../user/session/session-user-use-case"
import { UpdateUserController } from "../user/updateUser/update-user-controller"
import { UpdateUserRepository } from "../user/updateUser/update-user-repository"
import { UpdateUserUseCase } from "../user/updateUser/update-user-use-case"
import { ValidationUserController } from "../user/validationUser/validation-user-controller"
import { ValidationUserUseCase } from "../user/validationUser/validation-user-use-case"

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

export const makeSessionUserController = () => {
  const findUserByEmailRepository = new FindUserByEmailRepository()
  const sessionUserUseCase = new SessionUserUseCase(findUserByEmailRepository)

  const sessionUserController = new SessionUserController(sessionUserUseCase)

  return sessionUserController
}

export const makeDeleteUserController = () => {
  const deleteUserRepository = new DeleteUserRepository()
  const deleteUserUseCase = new DeleteUserUseCase(deleteUserRepository)

  const deleteUserController = new DeleteUserController(deleteUserUseCase)

  return deleteUserController
}

export const makeFindUserByIdController = () => {
  const findUserByIdRepository = new FindUserByIdRepository()
  const findUserByIdUseCase = new FindUserByIdUseCase(findUserByIdRepository)

  const findUserByIdController = new FindUserByIdController(findUserByIdUseCase)

  return findUserByIdController
}

export const makeValidationUserController = () => {
  const validationUserUseCase = new ValidationUserUseCase()

  const validationUserController = new ValidationUserController(
    validationUserUseCase
  )

  return validationUserController
}
