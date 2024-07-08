import { CreateControlleTicketUseCase } from "@/controlleTickets/createControlleTicket/create-controlleTicket-use-case"
import { CreateControlleTicketController } from "@/controlleTickets/createControlleTicket/create-controlleTickets-controller"
import { CreateControlleTicketRepository } from "@/controlleTickets/createControlleTicket/create-controlleTickets-repository"
import { DeleteControlleTicketController } from "@/controlleTickets/deleteControlleTicket/delete-controlleTicket-controller"
import { DeleteControlleTicketUseCase } from "@/controlleTickets/deleteControlleTicket/delete-controlleTicket-use-case"
import { FindControlleTicketByEventIdController } from "@/controlleTickets/findControlleTicketByEventId/find-controlleTicket-by-eventId-controller"
import { FindControlleTicketByEventIdRepository } from "@/controlleTickets/findControlleTicketByEventId/find-controlleTicket-by-eventId-repository"
import { FindControlleTicketByEventIdUseCase } from "@/controlleTickets/findControlleTicketByEventId/find-controlleTicket-by-eventId-use-case"
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

export const makeFindControlleTicketByEventIdController = () => {
  const findControlleTicketByEventIdRepository =
    new FindControlleTicketByEventIdRepository()

  const findControlleTicketByEventIdUseCase =
    new FindControlleTicketByEventIdUseCase(
      findControlleTicketByEventIdRepository
    )

  const findControlleTicketByEventIdController =
    new FindControlleTicketByEventIdController(
      findControlleTicketByEventIdUseCase
    )

  return findControlleTicketByEventIdController
}

export const makeDeleteControlleTicketController = () => {
  const deleteControlleTicketUseCase = new DeleteControlleTicketUseCase()
  const deleteControlleTicketController = new DeleteControlleTicketController(
    deleteControlleTicketUseCase
  )

  return deleteControlleTicketController
}
