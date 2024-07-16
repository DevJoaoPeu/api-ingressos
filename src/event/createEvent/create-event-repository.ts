import { prisma } from "../../prisma/PrismaClient/prisma"
import { Event } from "@prisma/client"

export class CreateEventRepository {
  async execute(createEventParams: Event) {
    return await prisma.event.create({
      data: createEventParams,
    })
  }
}
