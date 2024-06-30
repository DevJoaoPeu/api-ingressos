import { prisma } from "@/prisma/PrismaClient/prisma"
import { ICreateEventParams } from "../types"

export class CreateEventRepository {
  async execute(createEventParams: ICreateEventParams) {
    return await prisma.event.create({
      data: createEventParams,
    })
  }
}
