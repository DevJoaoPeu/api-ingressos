import { prisma } from "../../prisma/PrismaClient/prisma"
import { Ticket } from "@prisma/client"

export class CreateTicketRepository {
  async execute(createTicketParams: Ticket) {
    const inserts = []
    for (let i = 0; i < createTicketParams.qtTicket; i++) {
      const newTicket = await prisma.ticket.create({ data: createTicketParams })
      inserts.push(newTicket)
    }
    return inserts
  }
}
