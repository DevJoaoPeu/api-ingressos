import { ControllerTicket } from "@prisma/client"
import { CreateControlleTicketRepository } from "./create-controlleTickets-repository"
import { FindEventByIdRepository } from "@/event/findEventById/find-event-by-id-repository"
import { ControlleTicketExists, EventNotFound } from "@/erros/errors"
import { FindControlleTicketByTypeRepository } from "../findControlleTicketByType/find-controlle-ticket-by-type-repository"

export class CreateControlleTicketUseCase {
  constructor(
    private readonly createControlleTicketRepository: CreateControlleTicketRepository,
    private readonly findEventByIdRepository: FindEventByIdRepository,
    private readonly findControlleTicketByTypeRepository: FindControlleTicketByTypeRepository
  ) {}
  async execute(createControlleTicketParams: ControllerTicket) {
    const eventExists = await this.findEventByIdRepository.execute(
      createControlleTicketParams.eventId
    )

    if (!eventExists) {
      throw new EventNotFound()
    }

    const findControlleTicket =
      await this.findControlleTicketByTypeRepository.execute(
        createControlleTicketParams.type
      )

    if (findControlleTicket) {
      throw new ControlleTicketExists(createControlleTicketParams.type)
    }

    const createControlleTicket =
      await this.createControlleTicketRepository.execute(
        createControlleTicketParams
      )

    return createControlleTicket
  }
}
