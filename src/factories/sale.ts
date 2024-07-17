import { FindAllSalesByUserIdUseCase } from "src/sale/findAllSalesByUserId/find-all-sales-by-user-id-use-case"
import { FindControlleTicketByEventIdRepository } from "../controlleTickets/findControlleTicketByEventId/find-controlleTicket-by-eventId-repository"
import { UpdateQtTicketRepository } from "../controlleTickets/updateQtTicket/update-qtTicket-repository"
import { CreateSaleController } from "../sale/createSales/create-sale-controller"
import { CreateSaleRepository } from "../sale/createSales/create-sale-repository"
import { CreateSaleUseCase } from "../sale/createSales/create-sale-use-case"
import { FindTicketByIdRepository } from "../ticket/findTicketById/find-ticket-by-id-repository"
import { UpdateOwnerIdRepository } from "../ticket/updateOwnerId/update-ownerId-repository"
import { FindUserByIdRepository } from "../user/findUserById/find-user-by-id-repository"
import { FindAllSalesByUserIdController } from "src/sale/findAllSalesByUserId/find-all-sales-by-user-id-controller"
import { FindSaleByIdUseCase } from "src/sale/findSaleById/find-sale-by-id-use-case"
import { FindSaleByIdController } from "src/sale/findSaleById/find-sale-by-id-controller"
import { DeleteSaleRepository } from "src/sale/deleteSale/delete-sale-repository"
import { DeleteSaleUseCase } from "src/sale/deleteSale/delete-sale-use-case"
import { DeleteSaleController } from "src/sale/deleteSale/delete-sale-controller"

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

export const makeFindAllSalesByUserIdController = () => {
  const findAllSalesByUserIdUseCase = new FindAllSalesByUserIdUseCase()

  const findAllSalesByUserIdController = new FindAllSalesByUserIdController(
    findAllSalesByUserIdUseCase
  )

  return findAllSalesByUserIdController
}

export const makeFindSaleByIdController = () => {
  const findSaleByIdUseCase = new FindSaleByIdUseCase()

  const findSaleByIdController = new FindSaleByIdController(findSaleByIdUseCase)

  return findSaleByIdController
}

export const makeDeleteSaleController = () => {
  const deleteSaleRepository = new DeleteSaleRepository()
  const deleteSaleUseCase = new DeleteSaleUseCase(deleteSaleRepository)

  const deleteSaleController = new DeleteSaleController(deleteSaleUseCase)

  return deleteSaleController
}
