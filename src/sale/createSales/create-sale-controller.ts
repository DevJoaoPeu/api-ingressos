import { badRequest, ok, serverError } from "../../erros/http"
import { CreateSaleUseCase } from "./create-sale-use-case"
import {
  QtTicketUnavailable,
  TicketNotFound,
  UserNotFound,
} from "../../erros/errors"
import { IHttpParamsSale } from "../type"
import { saleSchema } from "../../schemas/sale"

export class CreateSaleController {
  constructor(private readonly createSaleUseCase: CreateSaleUseCase) {}
  async execute(httpParams: IHttpParamsSale) {
    try {
      const params = httpParams.body

      await saleSchema.parseAsync(params)

      const createSale = await this.createSaleUseCase.execute(params)

      return ok(createSale)
    } catch (error) {
      if (error instanceof UserNotFound) {
        return badRequest({
          message: error.message,
        })
      }
      if (error instanceof TicketNotFound) {
        return badRequest({
          message: error.message,
        })
      }
      if (error instanceof QtTicketUnavailable) {
        return badRequest({
          message: error.message,
        })
      }
      console.error(error)
      return serverError()
    }
  }
}
