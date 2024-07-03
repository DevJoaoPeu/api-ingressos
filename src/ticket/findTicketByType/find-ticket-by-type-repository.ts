import { prisma } from "@/prisma/PrismaClient/prisma"
import { TicketType } from "@prisma/client"

export class FindTicketByTypeRepository {
  async execute(type: TicketType) {
    return await prisma.ticket.findMany({
      where: { type },
    })
  }
}
