import { prisma } from "@/prisma/PrismaClient/prisma"

export class FindUserByIdRepository {
  async execute(userId: string) {
    return await prisma.user.findUnique({ where: { id: userId } })
  }
}
