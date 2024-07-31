import { prisma } from "../../../src/prisma/PrismaClient/prisma"

export class ListAllTicketsRepository {
  async execute(listTickets) {
    return await prisma.ticket.findMany({
      where: {
        eventId: listTickets.eventId,
        type: listTickets.type,
      },
    })
  }
}
