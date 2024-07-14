import { prisma } from "@/prisma/PrismaClient/prisma"
import { IUpdateQtTicket } from "../type"

export class UpdateQtTicketRepository {
  async execute(updateQtTicket: IUpdateQtTicket) {
    return await prisma.controllerTicket.update({
      where: {
        id: updateQtTicket.id,
      },
      data: {
        qtTicket: updateQtTicket.qtSale,
      },
    })
  }
}
