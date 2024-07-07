import { badRequest, ok, serverError } from "@/erros/http"
import { IHttpParamsFindControlleTicket } from "../type"
import { FindControlleTicketByEventIdUseCase } from "./find-controlleTicket-by-eventId-use-case"
import { ZodError } from "zod"
import { findControlleTicketSchema } from "@/schemas/controlleTicket"

export class FindControlleTicketByEventIdController {
  constructor(
    private readonly findControlleTicketByEventIdUseCase: FindControlleTicketByEventIdUseCase
  ) {}
  async execute(httpParams: IHttpParamsFindControlleTicket) {
    try {
      const params = httpParams.body

      await findControlleTicketSchema.parseAsync(params)

      const findControlleTicket =
        await this.findControlleTicketByEventIdUseCase.execute(params)

      return ok(findControlleTicket)
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
