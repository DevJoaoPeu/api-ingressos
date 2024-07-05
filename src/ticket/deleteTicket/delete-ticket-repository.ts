import { prisma } from "@/prisma/PrismaClient/prisma"

export class DeleteTicketsRepository {
  async execute(eventId: string) {
    return await prisma.ticket.deleteMany({
      where: {
        ownerId: null,
        eventId,
      },
    })
  }
}
