import { FindAllEventsRepository } from "./find-all-events-repository"

export class FindAllEventsUseCase {
  constructor(
    private readonly findAllEventsRepository: FindAllEventsRepository
  ) {}
  async execute(eventId: string) {
    const events = await this.findAllEventsRepository.execute(eventId)

    return events
  }
}
