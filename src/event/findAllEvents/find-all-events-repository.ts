import { prisma } from "@/prisma/PrismaClient/prisma"

export class FindAllEventsRepository {
  async execute(eventId: string) {
    return await prisma.event.findMany({
      where: {
        id: eventId,
      },
    })
  }
}
