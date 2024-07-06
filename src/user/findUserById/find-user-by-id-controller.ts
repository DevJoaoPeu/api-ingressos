import { userNotFoundResponse } from "@/erros/helpers/validation"
import { IUserByIdParams } from "../type"
import { FindUserByIdUseCase } from "./find-user-by-id-use-case"
import { badRequest, ok, serverError } from "@/erros/http"
import { isValidIdSchema } from "@/schemas/user/user"
import { ZodError } from "zod"

export class FindUserByIdController {
  constructor(private readonly findUserByIdUseCase: FindUserByIdUseCase) {}

  async execute(httpRequest: IUserByIdParams) {
    try {
      const userId = httpRequest.params.userId

      await isValidIdSchema.parseAsync({ userId })

      const user = await this.findUserByIdUseCase.execute(userId)

      if (!user) {
        return userNotFoundResponse()
      }

      return ok(user)
    } catch (error) {
      if (error instanceof ZodError) {
        return badRequest({
          message: error.errors[0].message,
        })
      }
      console.error(error)
      return serverError()
    }
  }
}
