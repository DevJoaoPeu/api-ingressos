import { Sale } from "@prisma/client"
import { CreateSaleRepository } from "./create-sale-repository"
import { FindUserByIdRepository } from "@/user/findUserById/find-user-by-id-repository"
import { FindTicketByIdRepository } from "@/ticket/findTicketById/find-ticket-by-id-repository"
import { TicketNotFound, UserNotFound } from "@/erros/errors"

export class CreateSaleUseCase {
  constructor(
    private readonly createSaleRepository: CreateSaleRepository,
    private readonly findUserByIdRepository: FindUserByIdRepository,
    private readonly findTicketByIdRepository: FindTicketByIdRepository
  ) {}

  async execute(createSaleParams: Sale) {
    const user = await this.findUserByIdRepository.execute(
      createSaleParams.userId
    )

    if (!user) {
      throw new UserNotFound()
    }

    const ticket = await this.findTicketByIdRepository.execute(
      createSaleParams.ticketId
    )

    if (!ticket) {
      throw new TicketNotFound()
    }
  }
}
