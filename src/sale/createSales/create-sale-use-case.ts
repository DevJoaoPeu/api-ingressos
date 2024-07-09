import { Sale } from "@prisma/client"
import { CreateSaleRepository } from "./create-sale-repository"
import { FindUserByIdRepository } from "@/user/findUserById/find-user-by-id-repository"
import { FindTicketByIdRepository } from "@/ticket/findTicketById/find-ticket-by-id-repository"
import {
  QtTicketUnavailable,
  TicketNotFound,
  UserNotFound,
} from "@/erros/errors"
import { FindControlleTicketByEventIdRepository } from "@/controlleTickets/findControlleTicketByEventId/find-controlleTicket-by-eventId-repository"

export class CreateSaleUseCase {
  constructor(
    private readonly createSaleRepository: CreateSaleRepository,
    private readonly findUserByIdRepository: FindUserByIdRepository,
    private readonly findTicketByIdRepository: FindTicketByIdRepository,
    private readonly findControlleTicketByEventIdRepository: FindControlleTicketByEventIdRepository
  ) {}

  async execute(createSaleParams: Sale) {
    const user = await this.findUserByIdRepository.execute(
      createSaleParams.userId
    )

    if (!user) {
      throw new UserNotFound()
    }

    const ticket = await this.findTicketByIdRepository.execute(
      createSaleParams.ticketId
    )

    if (!ticket) {
      throw new TicketNotFound()
    }

    const params = {
      eventId: ticket.eventId,
      type: ticket.type,
    }

    const controlleTicket =
      await this.findControlleTicketByEventIdRepository.execute(params)

    if (ticket.qtTicket > controlleTicket[0].qtTicket) {
      throw new QtTicketUnavailable(ticket.qtTicket)
    }

    const createSale = await this.createSaleRepository.execute(createSaleParams)

    return createSale
  }
}
