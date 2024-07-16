import { prisma } from "../../prisma/PrismaClient/prisma"
import { TicketType } from "@prisma/client"

export class FindControlleTicketByTypeRepository {
  async execute(type: TicketType) {
    return await prisma.controllerTicket.findFirst({
      where: {
        type,
      },
    })
  }
}
