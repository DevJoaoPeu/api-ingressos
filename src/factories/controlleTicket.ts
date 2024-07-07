import { CreateControlleTicketUseCase } from "@/controlleTickets/createControlleTicket/create-controlleTicket-use-case"
import { CreateControlleTicketController } from "@/controlleTickets/createControlleTicket/create-controlleTickets-controller"
import { CreateControlleTicketRepository } from "@/controlleTickets/createControlleTicket/create-controlleTickets-repository"
import { FindEventByIdRepository } from "@/event/findEventById/find-event-by-id-repository"

export const makeCreateControlleTicketController = () => {
  const createControlleTicketRepository = new CreateControlleTicketRepository()
  const findEventByIdRepository = new FindEventByIdRepository()

  const createControlleTicketUseCase = new CreateControlleTicketUseCase(
    createControlleTicketRepository,
    findEventByIdRepository
  )

  const createControlleTicketController = new CreateControlleTicketController(
    createControlleTicketUseCase
  )

  return createControlleTicketController
}
