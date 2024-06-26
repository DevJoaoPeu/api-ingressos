import { DateInvalid } from "@/erros/event/errors"
import { FindEventByIdRepository } from "../findEventById/find-event-by-id-repository"
import { ICreateEventParams } from "../types"
import { UpdateEventRepository } from "./update-event-repository"
import { validationDate } from "../utils/validation-date"

export class UpdateEventUseCase {
  constructor(
    private readonly updateEventRepository: UpdateEventRepository,
    private readonly findEventByIdRepository: FindEventByIdRepository
  ) {}

  async execute(
    eventId: string,
    updateEventParams: Partial<ICreateEventParams>
  ) {
    const existingEvent = await this.findEventByIdRepository.execute(eventId)

    const validationDateParams = validationDate(
      updateEventParams.dtStart,
      updateEventParams.dtEnd,
      existingEvent?.dtStart,
      existingEvent?.dtEnd
    )

    if (!validationDateParams) {
      throw new DateInvalid()
    }

    const updatedEvent = await this.updateEventRepository.execute(
      eventId,
      updateEventParams
    )

    return updatedEvent
  }
}
