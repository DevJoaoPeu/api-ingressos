import { prisma } from "../../prisma/PrismaClient/prisma"

export class FindAllSalesByUserIdUseCase {
  async execute(userId: string) {
    const findSales = await prisma.sale.findMany({
      where: {
        userId,
      },
      include: {
        user: {
          select: {
            name: true,
          },
        },
        ticket: {
          select: {
            price: true,
            event: {
              select: {
                name: true,
                dtStart: true,
                dtEnd: true,
              },
            },
          },
        },
      },
    })

    return findSales
  }
}
