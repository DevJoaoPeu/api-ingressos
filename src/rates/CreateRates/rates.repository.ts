import { Rates } from "@prisma/client"
import { prisma } from "../../prisma/PrismaClient/prisma"

export class CreateRatesRepository {
  async execute(createRatesParams: Rates) {
    return await prisma.rates.create({ data: createRatesParams })
  }
}
