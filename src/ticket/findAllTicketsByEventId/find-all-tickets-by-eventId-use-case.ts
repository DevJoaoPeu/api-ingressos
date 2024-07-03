import { FindAllTicketsByEventIdRepository } from "./find-all-tickets-by-eventId-repository"

export class FindAllTicketsByEventIdUseCase {
  constructor(
    private readonly findAllTicketsByEventIdRepository: FindAllTicketsByEventIdRepository
  ) {}
  async execute(eventId: string) {
    const tickets = await this.findAllTicketsByEventIdRepository.execute(
      eventId
    )

    return tickets
  }
}
