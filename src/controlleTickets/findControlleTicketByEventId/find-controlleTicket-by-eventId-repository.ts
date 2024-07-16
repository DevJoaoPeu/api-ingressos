import { prisma } from "../../prisma/PrismaClient/prisma"
import { IFindControlleTicketParams } from "../type"

export class FindControlleTicketByEventIdRepository {
  async execute(findControlleTicketParams: IFindControlleTicketParams) {
    return await prisma.controllerTicket.findMany({
      where: {
        eventId: findControlleTicketParams.eventId,
        type: findControlleTicketParams.type,
      },
    })
  }
}
