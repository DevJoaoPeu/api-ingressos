import { DeleteTicketsRepository } from "./delete-ticket-repository"

export class DeleteTicketUseCase {
  constructor(
    private readonly deleteTicketsRepository: DeleteTicketsRepository
  ) {}
  async execute(eventId: string) {
    const deleteTickets = await this.deleteTicketsRepository.execute(eventId)
    return deleteTickets
  }
}
