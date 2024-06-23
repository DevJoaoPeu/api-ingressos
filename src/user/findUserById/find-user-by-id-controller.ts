import {
  checkIfIdIsValid,
  invalidIdResponse,
  userNotFoundResponse,
} from "@/erros/helpers/validation"
import { IUserByIdParams } from "../type"
import { FindUserByIdUseCase } from "./find-user-by-id-use-case"
import { ok, serverError } from "@/erros/helpers/http"

export class FindUserByIdController {
  constructor(private readonly findUserByIdUseCase: FindUserByIdUseCase) {
    this.findUserByIdUseCase = findUserByIdUseCase
  }

  async execute(httpRequest: IUserByIdParams) {
    try {
      const params = httpRequest.params.userId

      const idIsValid = checkIfIdIsValid(params)

      if (!idIsValid) {
        return invalidIdResponse()
      }

      const user = await this.findUserByIdUseCase.execute(params)

      if (!user) {
        return userNotFoundResponse()
      }

      return ok(user)
    } catch (error) {
      console.error(error)
      return serverError()
    }
  }
}
