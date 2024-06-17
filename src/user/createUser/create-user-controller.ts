import { IHttpRequest } from "@/types/user/type"
import { CreateUserUseCase } from "@/user/createUser/create-user-use-case"

export class CreateUserController {
  constructor(private readonly createUserUseCase: CreateUserUseCase) {
    this.createUserUseCase = createUserUseCase
  }
  async execute(httpRequest: IHttpRequest) {
    try {
      const params = httpRequest.body

      const createdUser = await this.createUserUseCase.execute(params)

      return createdUser
    } catch (error) {
      console.log(error)
    }
  }
}
