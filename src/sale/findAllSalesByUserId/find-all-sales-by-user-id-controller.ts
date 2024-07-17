import { badRequest, ok, serverError } from "src/erros/http"
import { FindAllSalesByUserIdUseCase } from "./find-all-sales-by-user-id-use-case"
import { isValidIdSchema } from "src/schemas/user"
import { IUserByIdParams } from "src/user/type"
import { ZodError } from "zod"

export class FindAllSalesByUserIdController {
  constructor(
    private readonly findAllSalesByUserIdUseCase: FindAllSalesByUserIdUseCase
  ) {}
  async execute(httpParams: IUserByIdParams) {
    try {
      const userId = httpParams.params.userId

      await isValidIdSchema.parseAsync({ userId })

      const sales = await this.findAllSalesByUserIdUseCase.execute(userId)

      return ok(sales)
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
