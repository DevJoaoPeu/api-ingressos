import { FindEventByIdRepository } from "@/event/findEventById/find-event-by-id-repository"
import { CreateTicketController } from "@/ticket/createTicket/create-ticket-controller"
import { CreateTicketRepository } from "@/ticket/createTicket/create-ticket-repository"
import { CreateTicketUseCase } from "@/ticket/createTicket/create-ticket-use-case"
import { DeleteTicketController } from "@/ticket/deleteTicket/delete-ticket-controller"
import { DeleteTicketUseCase } from "@/ticket/deleteTicket/delete-ticket-use-case"
import { FindAllTicketsByEventIdController } from "@/ticket/findAllTicketsByEventId/find-all-tickets-by-eventId-controller"
import { FindAllTicketsByEventIdRepository } from "@/ticket/findAllTicketsByEventId/find-all-tickets-by-eventId-repository"
import { FindAllTicketsByEventIdUseCase } from "@/ticket/findAllTicketsByEventId/find-all-tickets-by-eventId-use-case"
import { FindTicketByIdController } from "@/ticket/findTicketById/find-ticket-by-id-controller"
import { FindTicketByIdRepository } from "@/ticket/findTicketById/find-ticket-by-id-repository"
import { FindTicketByIdUseCase } from "@/ticket/findTicketById/find-ticket-by-id-use-case"
import { FindTicketByTypeController } from "@/ticket/findTicketByType/find-ticket-by-type-controller"
import { FindTicketByTypeRepository } from "@/ticket/findTicketByType/find-ticket-by-type-repository"
import { FindTicketByTypeUseCase } from "@/ticket/findTicketByType/find-ticket-by-type-use-case"
import { FindTicketByUserIdController } from "@/ticket/findTicketByUserId/find-tickets-by-user-id-controller"
import { FindTicketByUserIdRepository } from "@/ticket/findTicketByUserId/find-tickets-by-user-id-repository"
import { FindTicketByUserIdUseCase } from "@/ticket/findTicketByUserId/find-tickets-by-user-id-use-case"

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

export const makeFindAllTicketsByEventIdController = () => {
  const findAllTicketsByEventIdRepository =
    new FindAllTicketsByEventIdRepository()
  const findAllTicketsByEventIdUseCase = new FindAllTicketsByEventIdUseCase(
    findAllTicketsByEventIdRepository
  )

  const findAllTicketsByEventIdController =
    new FindAllTicketsByEventIdController(findAllTicketsByEventIdUseCase)

  return findAllTicketsByEventIdController
}

export const makeFindTicketByTypeController = () => {
  const findTicketByTypeRepository = new FindTicketByTypeRepository()

  const findTicketByTypeUseCase = new FindTicketByTypeUseCase(
    findTicketByTypeRepository
  )

  const findTicketByTypeController = new FindTicketByTypeController(
    findTicketByTypeUseCase
  )

  return findTicketByTypeController
}

export const makeFindTicketByUserIdController = () => {
  const findTicketByUserIdRepository = new FindTicketByUserIdRepository()
  const findTicketByUserIdUseCase = new FindTicketByUserIdUseCase(
    findTicketByUserIdRepository
  )

  const findTicketByUserIdController = new FindTicketByUserIdController(
    findTicketByUserIdUseCase
  )

  return findTicketByUserIdController
}

export const makeDeleteTicketController = () => {
  const deleteTicketsUseCase = new DeleteTicketUseCase()

  const deleteTicketsController = new DeleteTicketController(
    deleteTicketsUseCase
  )

  return deleteTicketsController
}
