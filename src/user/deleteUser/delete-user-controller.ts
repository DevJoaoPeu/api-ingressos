import {
  checkIfIdIsValid,
  invalidIdResponse,
  userNotFoundResponse,
} from "@/erros/helpers/validation"
import { DeleteUserUseCase } from "./delete-user-use-case"
import { ok, serverError } from "@/erros/helpers/http"

export class DeleteUserController {
  constructor(private readonly deleteUserUseCase: DeleteUserUseCase) {
    this.deleteUserUseCase = deleteUserUseCase
  }
  async execute(httpRequest) {
    try {
      const userId = httpRequest.params.userId

      const idIsValid = checkIfIdIsValid(userId)

      if (!idIsValid) {
        return invalidIdResponse()
      }

      const deleteUser = await this.deleteUserUseCase.execute(userId)

      if (!deleteUser) {
        return userNotFoundResponse()
      }

      return ok(deleteUser)
    } catch (error) {
      console.error(error)
      return serverError()
    }
  }
}
