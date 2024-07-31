import { IHttpParamsListTickets } from "../types"
import { ListAllTicketsRepository } from "./list-all-tickets-repository"

export class ListAllTicketsUseCase {
  constructor(
    private readonly listAllTicketsRepository: ListAllTicketsRepository
  ) {}
  async execute(listTickets: IHttpParamsListTickets) {
    const listTicket = await this.listAllTicketsRepository.execute(listTickets)

    return listTicket[0]
  }
}
