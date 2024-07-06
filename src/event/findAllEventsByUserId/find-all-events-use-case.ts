import { FindAllEventsByUserIdRepository } from "./find-all-events-repository"

export class FindAllEventsByUserIdUseCase {
  constructor(
    private readonly findAllEventsByUserIdRepository: FindAllEventsByUserIdRepository
  ) {}
  async execute(userId: string) {
    const events = await this.findAllEventsByUserIdRepository.execute(userId)

    return events
  }
}
