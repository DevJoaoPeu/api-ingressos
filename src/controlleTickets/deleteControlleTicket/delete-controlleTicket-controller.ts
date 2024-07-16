import { DeleteControlleTicketUseCase } from "./delete-controlleTicket-use-case"
import { badRequest, ok, serverError } from "../../erros/http"
import { isValidControlleTicketIdSchema } from "../../schemas/controlleTicket"
import { ZodError } from "zod"
import { IHttpParamsControlleTicket } from "../type"
import { controlleTicketNotFoundResponse } from "../../erros/validation"

export class DeleteControlleTicketController {
  constructor(
    private readonly deleteControlleTicketUseCase: DeleteControlleTicketUseCase
  ) {}
  async execute(httpParams: IHttpParamsControlleTicket) {
    try {
      const controlleTicketId = httpParams.params.controlleTicketId

      await isValidControlleTicketIdSchema.parseAsync({ controlleTicketId })

      const controlleTicket = await this.deleteControlleTicketUseCase.execute(
        controlleTicketId
      )

      if (!controlleTicket) {
        return controlleTicketNotFoundResponse()
      }

      return ok(controlleTicket)
    } catch (error) {
      if (error instanceof ZodError) {
        return badRequest({
          message: error.errors[0].message,
        })
      }
      console.log(error)
      return serverError()
    }
  }
}
