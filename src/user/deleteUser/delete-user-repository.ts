import { prisma } from "../../prisma/PrismaClient/prisma"

export class DeleteUserRepository {
  async execute(userId: string) {
    try {
      return await prisma.user.delete({ where: { id: userId } })
    } catch (error) {
      return null
    }
  }
}
