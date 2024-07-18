import { badRequest, ok, serverError } from "../../erros/http"
import { ISaleIdParams } from "../type"
import { isValidIdSchema } from "../../schemas/sale"
import { DeleteSaleUseCase } from "./delete-sale-use-case"
import { saleNotFoundResponse } from "../../erros/validation"
import { ZodError } from "zod"

export class DeleteSaleController {
  constructor(private readonly deleteSaleUseCase: DeleteSaleUseCase) {}
  async execute(httpParams: ISaleIdParams) {
    try {
      const saleId = httpParams.params.saleId

      await isValidIdSchema.parseAsync({ saleId })

      const deleteSale = await this.deleteSaleUseCase.execute(saleId)

      if (!deleteSale) {
        return saleNotFoundResponse()
      }

      return ok(deleteSale)
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
