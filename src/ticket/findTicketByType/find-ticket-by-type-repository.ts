import { prisma } from "@/prisma/PrismaClient/prisma"
import { IFindAllTicketId } from "../type"

export class FindTicketByTypeRepository {
  async execute(findTicketsParams: IFindAllTicketId) {
    return await prisma.ticket.findMany({
      where: {
        type: findTicketsParams.type,
        eventId: findTicketsParams.eventId,
      },
    })
  }
}
