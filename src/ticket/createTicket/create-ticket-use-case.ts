import { FindEventByIdRepository } from "@/event/findEventById/find-event-by-id-repository"
import { CreateTicketRepository } from "./create-ticket-repository"
import { EventNotFound } from "@/erros/errors"
import { Ticket } from "@prisma/client"

export class CreateTicketUseCase {
  constructor(
    private readonly createTicketRepository: CreateTicketRepository,
    private readonly findEventByIdRepository: FindEventByIdRepository
  ) {}
  async execute(createTicketParams: Ticket) {
    const event = await this.findEventByIdRepository.execute(
      createTicketParams.eventId
    )

    if (!event) {
      throw new EventNotFound()
    }

    const ticket = await this.createTicketRepository.execute(createTicketParams)

    return ticket
  }
}
