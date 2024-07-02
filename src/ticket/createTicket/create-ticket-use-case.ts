import { FindEventByIdRepository } from "@/event/findEventById/find-event-by-id-repository"
import { ICreateTicketParams } from "../type"
import { CreateTicketRepository } from "./create-ticket-repository"

export class CreateTicketUseCase {
  constructor(
    private readonly createTicketRepository: CreateTicketRepository,
    private readonly findEventByIdRepository: FindEventByIdRepository
  ) {}
  async execute(createTicketParams: ICreateTicketParams) {
    const event = await this.findEventByIdRepository.execute(
      createTicketParams.eventId
    )

    if (!event) {
      return null
    }

    const ticket = await this.createTicketRepository.execute(createTicketParams)

    return ticket
  }
}
