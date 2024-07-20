import { prisma } from "../../prisma/PrismaClient/prisma"
import { TicketType } from "@prisma/client"

export class FindControlleTicketByTypeRepository {
  async execute(type: TicketType, eventId: string) {
    return await prisma.controllerTicket.findFirst({
      where: {
        eventId,
        type,
      },
    })
  }
}
