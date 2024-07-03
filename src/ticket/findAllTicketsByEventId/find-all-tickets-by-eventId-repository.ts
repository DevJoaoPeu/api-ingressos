import { prisma } from "@/prisma/PrismaClient/prisma"

export class FindAllTicketsByEventIdRepository {
  async execute(eventId: string) {
    return await prisma.ticket.findMany({ where: { eventId } })
  }
}
