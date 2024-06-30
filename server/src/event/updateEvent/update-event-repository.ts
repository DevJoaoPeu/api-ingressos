import { prisma } from "@/prisma/PrismaClient/prisma"
import { ICreateEventParams } from "../types"

export class UpdateEventRepository {
  async execute(
    eventId: string,
    updateEventParams: Partial<ICreateEventParams>
  ) {
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
