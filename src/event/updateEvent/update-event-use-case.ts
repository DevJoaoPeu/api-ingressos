import { ICreateEventParams } from "../types"
import { UpdateEventRepository } from "./update-event-repository"

export class UpdateEventUseCase {
  constructor(private readonly updateEventRepository: UpdateEventRepository) {
    this.updateEventRepository = updateEventRepository
  }

  async execute(
    eventId: string,
    updateEventParams: Partial<ICreateEventParams>
  ) {
    const event = await this.updateEventRepository.execute(
      eventId,
      updateEventParams
    )

    return event
  }
}
