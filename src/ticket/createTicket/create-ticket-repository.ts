import { prisma } from "@/prisma/PrismaClient/prisma"
import { ICreateTicketParams } from "../type"

export class CreateTicketRepository {
  async execute(createTicketParams: ICreateTicketParams) {
    const inserts = []
    for (let i = 0; i < createTicketParams.qtTicket; i++) {
      const newTicket = await prisma.ticket.create({ data: createTicketParams })
      inserts.push(newTicket)
    }
    return inserts
  }
}
