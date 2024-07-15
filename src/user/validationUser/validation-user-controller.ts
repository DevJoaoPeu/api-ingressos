import { badRequest, ok, serverError } from "@/erros/http"
import { ValidationUserUseCase } from "./validation-user-use-case"
import { JsonWebTokenError } from "jsonwebtoken"
import { IValidationUser } from "../type"

export class ValidationUserController {
  constructor(private readonly validationUserUseCase: ValidationUserUseCase) {}
  async execute(httpParams: IValidationUser) {
    try {
      const params = httpParams.headers.authorization

      if (!params) {
        return badRequest({
          message: "token is required",
        })
      }

      const [, token] = params.split(" ")

      const tokenJwt = await this.validationUserUseCase.execute(token)

      return ok(tokenJwt)
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
