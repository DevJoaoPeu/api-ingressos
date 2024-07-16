import { prisma } from "../../prisma/PrismaClient/prisma"

export class FindEventByIdRepository {
  async execute(eventId: string) {
    return await prisma.event.findUnique({
      where: {
        id: eventId,
      },
    })
  }
}
