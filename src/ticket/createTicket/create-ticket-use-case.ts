import { FindEventByIdRepository } from "@/event/findEventById/find-event-by-id-repository"
import { CreateTicketRepository } from "./create-ticket-repository"
import { EventNotFound } from "@/erros/errors"
import { Ticket } from "@prisma/client"
import { CreateControlleTicketRepository } from "@/controlleTickets/createControlleTicket/create-controlleTickets-repository"
import { ExistControlleTicket } from "@/controlleTickets/helper/helper"

export class CreateTicketUseCase {
  constructor(
    private readonly createTicketRepository: CreateTicketRepository,
    private readonly findEventByIdRepository: FindEventByIdRepository,
    private readonly createControlleTicketRepository: CreateControlleTicketRepository,
    private readonly existControlleTicket: ExistControlleTicket
  ) {}
  async execute(createTicketParams: Ticket) {
    const event = await this.findEventByIdRepository.execute(
      createTicketParams.eventId
    )

    if (!event) {
      throw new EventNotFound()
    }

    const paramsControlleTicket = {
      qtTicket: createTicketParams.qtTicket,
      price: createTicketParams.price,
      type: createTicketParams.type,
      eventId: createTicketParams.eventId,
    }

    await this.existControlleTicket.execute(createTicketParams.type)

    const createControlleTicket =
      await this.createControlleTicketRepository.execute(paramsControlleTicket)

    const ticket = await this.createTicketRepository.execute(createTicketParams)

    return { ticket, createControlleTicket }
  }
}
