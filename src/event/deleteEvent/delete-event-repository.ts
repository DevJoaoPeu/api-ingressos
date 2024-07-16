import { prisma } from "../../prisma/PrismaClient/prisma"

export class DeleteEventRepository {
  async execute(eventId: string) {
    try {
      return await prisma.event.delete({ where: { id: eventId } })
    } catch (error) {
      return null
    }
  }
}
