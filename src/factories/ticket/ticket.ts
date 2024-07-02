import { FindEventByIdRepository } from "@/event/findEventById/find-event-by-id-repository"
import { CreateTicketController } from "@/ticket/createTicket/create-ticket-controller"
import { CreateTicketRepository } from "@/ticket/createTicket/create-ticket-repository"
import { CreateTicketUseCase } from "@/ticket/createTicket/create-ticket-use-case"

export const makeCreateTicketController = () => {
  const createTicketRepository = new CreateTicketRepository()
  const findEventByIdRepository = new FindEventByIdRepository()

  const createTicketUseCase = new CreateTicketUseCase(
    createTicketRepository,
    findEventByIdRepository
  )

  const createTicketController = new CreateTicketController(createTicketUseCase)

  return createTicketController
}
