import { badRequest, ok, serverError } from "../../erros/http"
import { IUpdateUserParams } from "../../user/type"
import { UpdateUserUseCase } from "./update-user-use-case"
import { updateUserSchema } from "../../schemas/user"
import { userNotFoundResponse } from "../../erros/validation"
import { ZodError } from "zod"
import { EmailAlreadyExists } from "../../erros/errors"
import { User } from "@prisma/client"

export class UpdateUserController {
  constructor(private readonly updateUserUseCase: UpdateUserUseCase) {}

  async execute(httpRequest: IUpdateUserParams) {
    try {
      const params = httpRequest.body as Partial<User>
      const userId = httpRequest.params.userId

      await updateUserSchema.parseAsync(params)

      const updateUser = await this.updateUserUseCase.execute(userId, params)

      if (!updateUser) {
        return userNotFoundResponse()
      }

      console.log(updateUser)
      return ok(updateUser)
    } catch (error) {
      if (error instanceof ZodError) {
        return badRequest({
          message: error.errors[0].message,
        })
      }
      if (error instanceof EmailAlreadyExists) {
        return badRequest({
          message: error.message,
        })
      }
      console.log(error)
      return serverError()
    }
  }
}
