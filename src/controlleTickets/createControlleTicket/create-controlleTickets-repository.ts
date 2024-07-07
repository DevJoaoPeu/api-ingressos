import { prisma } from "@/prisma/PrismaClient/prisma"
import { ControllerTicket } from "@prisma/client"

export class CreateControlleTicketRepository {
  async execute(createControlleTicketParams: ControllerTicket) {
    return await prisma.controllerTicket.create({
      data: createControlleTicketParams,
    })
  }
}
