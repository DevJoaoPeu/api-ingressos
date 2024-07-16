import { prisma } from "../../prisma/PrismaClient/prisma"

export class FindAllEventsRepository {
  async execute() {
    return await prisma.event.findMany({})
  }
}
