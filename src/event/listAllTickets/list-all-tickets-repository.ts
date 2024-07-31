import { prisma } from "../../prisma/PrismaClient/prisma"
import { IHttpParamsListTickets } from "../types"

export class ListAllTicketsRepository {
  async execute(listTickets: IHttpParamsListTickets) {
    return await prisma.ticket.findMany({
      where: {
        eventId: listTickets.eventId,
        type: listTickets.type,
        ownerId: null,
      },
    })
  }
}
