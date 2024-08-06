import { prisma } from "../../prisma/PrismaClient/prisma"
import { IHttpListTickets } from "../types"

export class ListOneTicketRepository {
  async execute(listTickets: IHttpListTickets) {
    return await prisma.ticket.findMany({
      where: {
        eventId: listTickets.eventId,
        type: listTickets.type,
        ownerId: null,
      },
    })
  }
}
