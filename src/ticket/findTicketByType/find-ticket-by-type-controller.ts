import { badRequest, ok, serverError } from "@/erros/http"
import { FindTicketByTypeUseCase } from "./find-ticket-by-type-use-case"
import { IParamsFindAllTicketId } from "../type"
import { findTicketsSchema } from "@/schemas/ticket/ticket"
import { ZodError } from "zod"

export class FindTicketByTypeController {
  constructor(
    private readonly findTicketByTypeUseCase: FindTicketByTypeUseCase
  ) {}
  async execute(httpRequest: IParamsFindAllTicketId) {
    try {
      const params = httpRequest.params

      await findTicketsSchema.parseAsync(params)

      const ticket = await this.findTicketByTypeUseCase.execute(params)

      return ok(ticket)
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
