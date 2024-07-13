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
import { UpdateOwnerIdRepository } from "@/ticket/updateOwnerId/update-ownerId-repository"

export class CreateSaleUseCase {
  constructor(
    private readonly createSaleRepository: CreateSaleRepository,
    private readonly findUserByIdRepository: FindUserByIdRepository,
    private readonly findTicketByIdRepository: FindTicketByIdRepository,
    private readonly findControlleTicketByEventIdRepository: FindControlleTicketByEventIdRepository,
    private readonly updateOwnerIdRepository: UpdateOwnerIdRepository
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

    if (createSaleParams.amountTotal > controlleTicket[0].qtTicket) {
      throw new QtTicketUnavailable(createSaleParams.amountTotal)
    }

    const createSale = await this.createSaleRepository.execute(createSaleParams)

    const updateOwnerId = await this.updateOwnerIdRepository.execute(
      createSaleParams.ticketId,
      createSaleParams.userId
    )

    return { createSale, updateOwnerId }
  }
}
