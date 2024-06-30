import { prisma } from "@/prisma/PrismaClient/prisma"
import { ICreateTicketParams } from "../type"

export class CreateTicketRepository {
  async execute(createTicketParams: ICreateTicketParams) {
    return await prisma.ticket.create({ data: createTicketParams })
  }
}
