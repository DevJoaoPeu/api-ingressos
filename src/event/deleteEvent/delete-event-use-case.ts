import { DeleteEventRepository } from "./delete-event-repository"

export class DeleteEventUseCase {
  constructor(private readonly deleteEventRepository: DeleteEventRepository) {}
  async execute(eventId: string) {
    const deleteEvent = await this.deleteEventRepository.execute(eventId)

    return deleteEvent
  }
}
