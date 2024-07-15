import { prisma } from "@/prisma/PrismaClient/prisma"
import { TicketType } from "@prisma/client"
import { Decimal } from "@prisma/client/runtime/library"

interface IControllerTicket {
  qtTicket: number
  price: Decimal
  type: TicketType
  eventId: string
}
export class CreateControlleTicketRepository {
  async execute(createControlleTicketParams: IControllerTicket) {
    return await prisma.controllerTicket.create({
      data: createControlleTicketParams,
    })
  }
}
