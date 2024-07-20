import { ControlleTicketExists } from "../../erros/errors"
import { FindControlleTicketByTypeRepository } from "../findControlleTicketByType/find-controlle-ticket-by-type-repository"
import { TicketType } from "@prisma/client"

export class ExistControlleTicket {
  constructor(
    private readonly findControlleTicketByTypeRepository: FindControlleTicketByTypeRepository
  ) {}
  async execute(type: TicketType, eventId: string) {
    const findControlleTicket =
      await this.findControlleTicketByTypeRepository.execute(type, eventId)

    if (findControlleTicket) {
      throw new ControlleTicketExists(type)
    }

    return false
  }
}
