import { IFindControlleTicketParams } from "../type"
import { FindControlleTicketByEventIdRepository } from "./find-controlleTicket-by-eventId-repository"

export class FindControlleTicketByEventIdUseCase {
  constructor(
    private readonly findControlleTicketByEventIdRepository: FindControlleTicketByEventIdRepository
  ) {}
  async execute(findControlleTicketParams: IFindControlleTicketParams) {
    const findControlleTicket =
      await this.findControlleTicketByEventIdRepository.execute(
        findControlleTicketParams
      )

    return findControlleTicket
  }
}
