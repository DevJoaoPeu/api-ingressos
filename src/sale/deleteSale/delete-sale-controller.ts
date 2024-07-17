import { ok, serverError } from "src/erros/http"
import { ISaleIdParams } from "../type"
import { isValidIdSchema } from "src/schemas/sale"
import { DeleteSaleUseCase } from "./delete-sale-use-case"
import { saleNotFoundResponse } from "src/erros/validation"

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
      console.error(error)
      return serverError()
    }
  }
}
