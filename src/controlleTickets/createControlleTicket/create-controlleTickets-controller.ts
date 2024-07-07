import { badRequest, ok, serverError } from "@/erros/http"
import { IHttpCreateControlleTicketParams } from "../type"
import { controlleTicketSchema } from "@/schemas/controlleTicket"
import { ZodError } from "zod"
import { CreateControlleTicketUseCase } from "./create-controlleTicket-use-case"

export class CreateControlleTicketController {
  constructor(
    private readonly createControlleTicketUseCase: CreateControlleTicketUseCase
  ) {}
  async execute(httpParams: IHttpCreateControlleTicketParams) {
    try {
      const params = httpParams.body

      await controlleTicketSchema.parseAsync(params)

      const controlleTicket = await this.createControlleTicketUseCase.execute(
        params
      )

      return ok(controlleTicket)
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
