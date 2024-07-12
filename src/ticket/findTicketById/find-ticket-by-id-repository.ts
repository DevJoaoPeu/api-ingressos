import { prisma } from "@/prisma/PrismaClient/prisma"

export class FindTicketByIdRepository {
  async execute(ticketId: string) {
    return await prisma.ticket.findUnique({
      where: {
        id: ticketId,
        ownerId: null,
      },
    })
  }
}
