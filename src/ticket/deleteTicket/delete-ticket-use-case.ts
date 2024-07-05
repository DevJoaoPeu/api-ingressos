import { prisma } from "@/prisma/PrismaClient/prisma"

export class DeleteTicketUseCase {
  async execute(eventId: string) {
    const deleteTickets = await prisma.ticket.deleteMany({
      where: {
        ownerId: null,
        eventId,
      },
    })

    return deleteTickets
  }
}
