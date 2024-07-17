import { isValidIdSchema } from "../../schemas/sale"
import { ISaleIdParams } from "../type"
import { badRequest, ok, serverError } from "../../erros/http"
import { ZodError } from "zod"
import { FindSaleByIdUseCase } from "./find-sale-by-id-use-case"
import { saleNotFoundResponse } from "../../erros/validation"

export class FindSaleByIdController {
  constructor(private readonly findSaleByIdUseCase: FindSaleByIdUseCase) {}
  async execute(httpParams: ISaleIdParams) {
    try {
      const saleId = httpParams.params.saleId

      await isValidIdSchema.parseAsync({ saleId })

      const sale = await this.findSaleByIdUseCase.execute(saleId)

      if (!sale) {
        return saleNotFoundResponse()
      }

      return ok(sale)
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
