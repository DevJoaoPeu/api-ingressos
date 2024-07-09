import { FindControlleTicketByEventIdRepository } from "@/controlleTickets/findControlleTicketByEventId/find-controlleTicket-by-eventId-repository"
import { CreateSaleController } from "@/sale/createSales/create-sale-controller"
import { CreateSaleRepository } from "@/sale/createSales/create-sale-repository"
import { CreateSaleUseCase } from "@/sale/createSales/create-sale-use-case"
import { FindTicketByIdRepository } from "@/ticket/findTicketById/find-ticket-by-id-repository"
import { FindUserByIdRepository } from "@/user/findUserById/find-user-by-id-repository"

export const makeCreateSaleController = () => {
  const createSaleRepository = new CreateSaleRepository()
  const findUserByIdRepository = new FindUserByIdRepository()
  const findTicketByIdRepository = new FindTicketByIdRepository()
  const findControlleTicketByEventIdRepository =
    new FindControlleTicketByEventIdRepository()

  const createSaleUseCase = new CreateSaleUseCase(
    createSaleRepository,
    findUserByIdRepository,
    findTicketByIdRepository,
    findControlleTicketByEventIdRepository
  )

  const createSaleController = new CreateSaleController(createSaleUseCase)

  return createSaleController
}
