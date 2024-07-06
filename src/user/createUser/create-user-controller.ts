import { badRequest, created, serverError } from "@/erros/helpers/http"
import { EmailAlreadyExists } from "@/erros/user/errors"
import { createUserSchema } from "@/schemas/user/user"
import { ICreateHttpRequest } from "@/user/type"
import { CreateUserUseCase } from "@/user/createUser/create-user-use-case"
import { ZodError } from "zod"

export class CreateUserController {
  constructor(private readonly createUserUseCase: CreateUserUseCase) {}
  async execute(httpRequest: ICreateHttpRequest) {
    try {
      const params = httpRequest.body

      await createUserSchema.parseAsync(params)

      const createdUser = await this.createUserUseCase.execute(params)

      return created(createdUser)
    } catch (error) {
      if (error instanceof ZodError) {
        return badRequest({
          message: error.errors[0].message,
        })
      }
      if (error instanceof EmailAlreadyExists) {
        return badRequest({ message: error.message })
      }
      console.log(error)
      return serverError()
    }
  }
}
