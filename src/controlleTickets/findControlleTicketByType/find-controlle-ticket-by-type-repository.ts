import { prisma } from "@/prisma/PrismaClient/prisma"

export class FindControlleTicketByTypeRepository {
  async execute(type: string) {
    return await prisma.controllerTicket.findFirst({
      where: {
        type,
      },
    })
  }
}
