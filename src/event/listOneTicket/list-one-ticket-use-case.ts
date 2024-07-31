import { IHttpListTickets } from "../types"
import { ListOneTicketRepository } from "./list-one-ticket-repository"

export class ListOneTicketUseCase {
  constructor(
    private readonly listAllTicketsRepository: ListOneTicketRepository
  ) {}
  async execute(listTickets: IHttpListTickets) {
    const listTicket = await this.listAllTicketsRepository.execute(listTickets)

    return listTicket[0]
  }
}
