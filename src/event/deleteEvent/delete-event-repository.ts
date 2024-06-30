import { prisma } from "@/prisma/PrismaClient/prisma"

export class DeleteEventRepository {
  async execute(eventId: string) {
    return await prisma.event.delete({ where: { id: eventId } })
  }
}
