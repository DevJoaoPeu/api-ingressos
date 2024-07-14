import { FindAllEventsRepository } from "./find-all-events-repository"

export class FindAllEventsUseCase {
  constructor(
    private readonly findAllEventsRepository: FindAllEventsRepository
  ) {}
  async execute() {
    const events = await this.findAllEventsRepository.execute()

    return events
  }
}
