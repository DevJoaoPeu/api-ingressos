import { prisma } from "@/prisma/PrismaClient/prisma"

export class DeleteUserRepository {
  async execute(userId: string) {
    return await prisma.user.delete({ where: { id: userId } })
  }
}
