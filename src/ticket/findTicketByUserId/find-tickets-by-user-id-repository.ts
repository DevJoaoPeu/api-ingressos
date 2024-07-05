import { prisma } from "@/prisma/PrismaClient/prisma"

export class FindTicketByUserIdRepository {
  async execute(userId: string) {
    return await prisma.ticket.findMany({ where: { ownerId: userId } })
  }
}
