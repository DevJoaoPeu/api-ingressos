import { prisma } from "../../prisma/PrismaClient/prisma"
import { Sale } from "@prisma/client"

export class CreateSaleRepository {
  async execute(createSaleParams: Sale) {
    return await prisma.sale.create({
      data: createSaleParams,
    })
  }
}
