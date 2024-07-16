import { prisma } from "../../prisma/PrismaClient/prisma"

export class FindAllEventsByUserIdRepository {
  async execute(userId: string) {
    return await prisma.event.findMany({
      where: {
        userId,
      },
    })
  }
}
