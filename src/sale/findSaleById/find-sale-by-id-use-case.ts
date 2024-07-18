import { prisma } from "../../prisma/PrismaClient/prisma"

export class FindSaleByIdUseCase {
  async execute(saleId: string) {
    const sale = await prisma.sale.findUnique({
      where: {
        id: saleId,
      },
    })

    return sale
  }
}
