import { ok, serverError } from "@/erros/http"
import { FindAllEventsUseCase } from "./find-all-events-use-case"
import { isValidIdSchema } from "@/schemas/user"

export class FindAllEventsController {
  constructor(private readonly findAllEventsUseCase: FindAllEventsUseCase) {}
  async execute(httpParams) {
    try {
      const eventId = httpParams.params.eventId

      await isValidIdSchema.parseAsync({ eventId })

      const events = await this.findAllEventsUseCase.execute(eventId)

      return ok(events)
    } catch (error) {
      console.error(error)
      return serverError()
    }
  }
}
