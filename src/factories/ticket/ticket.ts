import { FindEventByIdRepository } from "@/event/findEventById/find-event-by-id-repository"
import { CreateTicketController } from "@/ticket/createTicket/create-ticket-controller"
import { CreateTicketRepository } from "@/ticket/createTicket/create-ticket-repository"
import { CreateTicketUseCase } from "@/ticket/createTicket/create-ticket-use-case"
import { FindTicketByIdController } from "@/ticket/findTicketById/find-ticket-by-id-controller"
import { FindTicketByIdRepository } from "@/ticket/findTicketById/find-ticket-by-id-repository"
import { FindTicketByIdUseCase } from "@/ticket/findTicketById/find-ticket-by-id-use-case"

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

export const makeFindTicketByIdController = () => {
  const findTicketByIdRepository = new FindTicketByIdRepository()
  const findTicketByIdUseCase = new FindTicketByIdUseCase(
    findTicketByIdRepository
  )

  const findTicketByIdController = new FindTicketByIdController(
    findTicketByIdUseCase
  )

  return findTicketByIdController
}