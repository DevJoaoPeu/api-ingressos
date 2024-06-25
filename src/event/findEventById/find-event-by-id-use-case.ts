import { FindEventByIdRepository } from "./find-event-by-id-repository"

export class FindEventByIdUseCase {
  constructor(
    private readonly findEventByIdRepository: FindEventByIdRepository
  ) {
    this.findEventByIdRepository = findEventByIdRepository
  }
  async execute(userId: string) {
    const event = await this.findEventByIdRepository.execute(userId)

    return event
  }
}
