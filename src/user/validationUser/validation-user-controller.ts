import { badRequest, ok, serverError } from "@/erros/http"
import { ValidationUserUseCase } from "./validation-user-use-case"
import { JsonWebTokenError } from "jsonwebtoken"

export class ValidationUserController {
  constructor(private readonly validationUserUseCase: ValidationUserUseCase) {}
  async execute(httpParams) {
    try {
      const params = httpParams.body.token

      const token = await this.validationUserUseCase.execute(params)

      return ok(token)
    } catch (error) {
      if (error instanceof JsonWebTokenError) {
        return badRequest({
          message: error.message,
        })
      }
      console.error(error)
      return serverError()
    }
  }
}
