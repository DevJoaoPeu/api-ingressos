import { prisma } from "../../prisma/PrismaClient/prisma"

export class DeleteSaleRepository {
  async execute(saleId: string) {
    try {
      return await prisma.sale.delete({
        where: {
          id: saleId,
        },
      })
    } catch (error) {
      return null
    }
  }
}
