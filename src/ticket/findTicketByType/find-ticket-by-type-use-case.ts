import { IFindAllTicketId } from "../type"
import { FindTicketByTypeRepository } from "./find-ticket-by-type-repository"

export class FindTicketByTypeUseCase {
  constructor(
    private readonly findTicketByTypeRepository: FindTicketByTypeRepository
  ) {}
  async execute(ticketParams: IFindAllTicketId) {
    const ticket = await this.findTicketByTypeRepository.execute(ticketParams)

    return ticket
  }
}
