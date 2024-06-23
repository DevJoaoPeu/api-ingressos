import { prisma } from "@/prisma/PrismaClient/prisma"

export class CreateEventRepository {
  async execute(createEventParams) {
    return await prisma.event.create({
      data: createEventParams,
    })
  }
}
