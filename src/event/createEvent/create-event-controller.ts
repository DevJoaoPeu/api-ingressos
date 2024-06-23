import { createEventSchema } from "@/schemas/event/event"
import { IEventHttpRequest } from "../types"
import { CreateEventUseCase } from "./create-event-use-case"
import { badRequest, ok, serverError } from "@/erros/helpers/http"
import { ZodError } from "zod"

export class CreateEventController {
  constructor(private readonly createEventUseCase: CreateEventUseCase) {
    this.createEventUseCase = createEventUseCase
  }

  async execute(httpRequest: IEventHttpRequest) {
    try {
      const params = httpRequest.body

      await createEventSchema.parseAsync(params)

      const event = await this.createEventUseCase.execute(params)

      return ok(event)
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
