import { badRequest, ok, serverError } from "../../erros/http"
import { IHttpCreateControlleTicketParams } from "../type"
import { controlleTicketSchema } from "../../schemas/controlleTicket"
import { ZodError } from "zod"
import { CreateControlleTicketUseCase } from "./create-controlleTicket-use-case"
import { ControlleTicketExists, EventNotFound } from "../../erros/errors"

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

      if (error instanceof EventNotFound) {
        return badRequest({
          message: error.message,
        })
      }

      if (error instanceof ControlleTicketExists) {
        return badRequest({
          message: error.message,
        })
      }
      console.error(error)
      return serverError()
    }
  }
}
