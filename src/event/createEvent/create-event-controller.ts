import { createEventSchema } from "../../schemas/event"
import { IEventHttpRequest } from "../types"
import { CreateEventUseCase } from "./create-event-use-case"
import { badRequest, created, serverError } from "../../erros/http"
import { ZodError } from "zod"
import { DateInvalid, IdNotFound } from "../../erros/errors"

export class CreateEventController {
  constructor(private readonly createEventUseCase: CreateEventUseCase) {}

  async execute(httpRequest: IEventHttpRequest) {
    try {
      const params = httpRequest.body

      await createEventSchema.parseAsync(params)

      const event = await this.createEventUseCase.execute(params)

      return created(event)
    } catch (error) {
      if (error instanceof ZodError) {
        return badRequest({
          message: error.errors[0].message,
        })
      }

      if (error instanceof IdNotFound) {
        return badRequest({
          message: error.message,
        })
      }

      if (error instanceof DateInvalid) {
        return badRequest({
          message: error.message,
        })
      }
      console.error(error)
      return serverError()
    }
  }
}
