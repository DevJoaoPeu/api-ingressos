import { userNotFoundResponse } from "@/erros/validation"
import { DeleteUserUseCase } from "./delete-user-use-case"
import { badRequest, ok, serverError } from "@/erros/http"
import { IUserByIdParams } from "../type"
import { isValidIdSchema } from "@/schemas/user"
import { ZodError } from "zod"

export class DeleteUserController {
  constructor(private readonly deleteUserUseCase: DeleteUserUseCase) {}
  async execute(httpRequest: IUserByIdParams) {
    try {
      const userId = httpRequest.params.userId

      await isValidIdSchema.parseAsync({ userId })

      const deleteUser = await this.deleteUserUseCase.execute(userId)

      if (!deleteUser) {
        return userNotFoundResponse()
      }

      return ok(deleteUser)
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
