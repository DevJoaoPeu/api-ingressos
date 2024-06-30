import { prisma } from "@/prisma/PrismaClient/prisma"

export class DeleteEventRepository {
  async execute(event: string) {
    return await prisma.event.delete({ where: { id: event } })
  }
}
