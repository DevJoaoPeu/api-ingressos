import { prisma } from "@/prisma/PrismaClient/prisma"

export class SessionUserRepository {
  async execute(email: string) {
    return await prisma.user.findFirst({ where: { email } })
  }
}
