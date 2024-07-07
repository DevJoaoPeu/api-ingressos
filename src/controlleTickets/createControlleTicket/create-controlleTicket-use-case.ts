import { ControllerTicket } from "@prisma/client"
import { CreateControlleTicketRepository } from "./create-controlleTickets-repository"
import { FindEventByIdRepository } from "@/event/findEventById/find-event-by-id-repository"
import { EventNotFound } from "@/erros/errors"

export class CreateControlleTicketUseCase {
  constructor(
    private readonly createControlleTicketRepository: CreateControlleTicketRepository,
    private readonly findEventByIdRepository: FindEventByIdRepository
  ) {}
  async execute(createControlleTicketParams: ControllerTicket) {
    const eventExists = await this.findEventByIdRepository.execute(
      createControlleTicketParams.eventId
    )

    if (!eventExists) {
      throw new EventNotFound()
    }

    const createControlleTicket =
      await this.createControlleTicketRepository.execute(
        createControlleTicketParams
      )

    return createControlleTicket
  }
}
