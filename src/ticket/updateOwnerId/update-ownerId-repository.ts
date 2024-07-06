import { prisma } from "@/prisma/PrismaClient/prisma"

export class UpdateOwnerIdRepository {
  async execute(ticketId: string, userId: string) {
    return await prisma.ticket.update({
      where: {
        id: ticketId,
      },
      data: {
        ownerId: userId,
      },
    })
  }
}
