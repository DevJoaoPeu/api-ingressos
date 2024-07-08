import { prisma } from "@/prisma/PrismaClient/prisma"

export class DeleteControlleTicketUseCase {
  async execute(controlleTicketId: string) {
    const deleteControlleTicket = await prisma.controllerTicket.delete({
      where: {
        id: controlleTicketId,
      },
    })

    return deleteControlleTicket
  }
}
