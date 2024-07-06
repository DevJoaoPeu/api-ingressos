import { prisma } from "@/prisma/PrismaClient/prisma"
import { Event } from "@prisma/client"

export class UpdateEventRepository {
  async execute(eventId: string, updateEventParams: Partial<Event>) {
    try {
      return await prisma.event.update({
        where: {
          id: eventId,
        },
        data: updateEventParams,
      })
    } catch (error) {
      return null
    }
  }
}
