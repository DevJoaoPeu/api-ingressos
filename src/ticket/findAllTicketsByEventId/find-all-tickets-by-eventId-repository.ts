import { prisma } from "@/prisma/PrismaClient/prisma"

export class FindAllTicketsByEventId {
  async execute(eventId: string) {
    return await prisma.ticket.findMany({ where: { eventId } })
  }
}
