import { badRequest, ok, serverError } from "@/erros/helpers/http"
import { ICreateUserParams, IUpdateUserParams } from "@/types/user/type"
import { UpdateUserUseCase } from "./update-user-use-case"
import { updateUserSchema } from "@/schemas/user/user"
import { userNotFoundResponse } from "@/erros/helpers/validation"
import { ZodError } from "zod"
import { EmailAlreadyExists } from "@/erros/user/EmailAlreadyExists"

export class UpdateUserController {
  constructor(private readonly updateUserUseCase: UpdateUserUseCase) {
    this.updateUserUseCase = updateUserUseCase
  }

  async execute(httpRequest) {
    try {
      const params = httpRequest.body 
      const userId = httpRequest.params.userId

      await updateUserSchema.parseAsync(params)

      const updateUser = await this.updateUserUseCase.execute(userId, params)

      if (!updateUser) {
        return userNotFoundResponse()
      }
      
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
