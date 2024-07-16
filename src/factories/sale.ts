import { FindControlleTicketByEventIdRepository } from "../controlleTickets/findControlleTicketByEventId/find-controlleTicket-by-eventId-repository"
import { UpdateQtTicketRepository } from "../controlleTickets/updateQtTicket/update-qtTicket-repository"
import { CreateSaleController } from "../sale/createSales/create-sale-controller"
import { CreateSaleRepository } from "../sale/createSales/create-sale-repository"
import { CreateSaleUseCase } from "../sale/createSales/create-sale-use-case"
import { FindTicketByIdRepository } from "../ticket/findTicketById/find-ticket-by-id-repository"
import { UpdateOwnerIdRepository } from "../ticket/updateOwnerId/update-ownerId-repository"
import { FindUserByIdRepository } from "../user/findUserById/find-user-by-id-repository"

export const makeCreateSaleController = () => {
  const createSaleRepository = new CreateSaleRepository()
  const findUserByIdRepository = new FindUserByIdRepository()
  const findTicketByIdRepository = new FindTicketByIdRepository()
  const findControlleTicketByEventIdRepository =
    new FindControlleTicketByEventIdRepository()
  const updateOwnerIdRepository = new UpdateOwnerIdRepository()

  const updateQtTicketRepository = new UpdateQtTicketRepository()

  const createSaleUseCase = new CreateSaleUseCase(
    createSaleRepository,
    findUserByIdRepository,
    findTicketByIdRepository,
    findControlleTicketByEventIdRepository,
    updateOwnerIdRepository,
    updateQtTicketRepository
  )

  const createSaleController = new CreateSaleController(createSaleUseCase)

  return createSaleController
}
