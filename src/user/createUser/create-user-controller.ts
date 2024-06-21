import { badRequest, ok, serverError } from "@/erros/helpers/http"
import { EmailAlreadyExists } from "@/erros/user/EmailAlreadyExists"
import { createUserSchema } from "@/schemas/user/user"
import { ICreateHttpRequest } from "@/types/user/type"
import { CreateUserUseCase } from "@/user/createUser/create-user-use-case"
import { ZodError } from "zod"

export class CreateUserController {
  constructor(private readonly createUserUseCase: CreateUserUseCase) {
    this.createUserUseCase = createUserUseCase
  }
  async execute(httpRequest: ICreateHttpRequest) {
    try {
      const params = httpRequest.body

      await createUserSchema.parseAsync(params)

      const createdUser = await this.createUserUseCase.execute(params)

      return ok(createdUser)
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
