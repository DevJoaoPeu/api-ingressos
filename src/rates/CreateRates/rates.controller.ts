import { createRatesSchema } from "../../schemas/rates"
import { IHttpParamsCreateRates } from "../types"
import { CreateRatesService } from "./rates.service"
import { ZodError } from "zod"
import { badRequest, created, serverError } from "../../erros/http"

export class CreateRatesController {
  constructor(private readonly createRatesService: CreateRatesService) {}
  async execute(httpParams: IHttpParamsCreateRates) {
    try {
      const params = httpParams.body

      await createRatesSchema.parseAsync(params)

      const createRates = await this.createRatesService.execute(params)

      return created(createRates)
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
