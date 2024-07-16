import { ok, serverError } from "../../erros/http"
import { FindAllEventsUseCase } from "./find-all-events-use-case"

export class FindAllEventsController {
  constructor(private readonly findAllEventsUseCase: FindAllEventsUseCase) {}
  async execute() {
    try {
      const events = await this.findAllEventsUseCase.execute()

      return ok(events)
    } catch (error) {
      console.error(error)
      return serverError()
    }
  }
}
