import { DateInvalid } from "@/erros/errors"
import { FindEventByIdRepository } from "../findEventById/find-event-by-id-repository"
import { UpdateEventRepository } from "./update-event-repository"
import { validationDate } from "../utils/validation-date"
import { Event } from "@prisma/client"

export class UpdateEventUseCase {
  constructor(
    private readonly updateEventRepository: UpdateEventRepository,
    private readonly findEventByIdRepository: FindEventByIdRepository
  ) {}

  async execute(eventId: string, updateEventParams: Partial<Event>) {
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
