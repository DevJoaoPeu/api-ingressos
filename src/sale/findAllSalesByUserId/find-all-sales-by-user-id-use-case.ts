import { prisma } from "src/prisma/PrismaClient/prisma"

export class FindAllSalesByUserIdUseCase {
  async execute(userId: string) {
    const findSales = await prisma.sale.findMany({
      where: {
        userId,
      },
    })

    return findSales
  }
}