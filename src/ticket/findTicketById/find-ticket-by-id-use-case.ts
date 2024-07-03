import { FindTicketByIdRepository } from "./find-ticket-by-id-repository"

export class FindTicketByIdUseCase {
  constructor(
    private readonly findTicketByIdRepository: FindTicketByIdRepository
  ) {}
  async execute(ticketId: string) {
    const ticket = await this.findTicketByIdRepository.execute(ticketId)

    return ticket
  }
}
