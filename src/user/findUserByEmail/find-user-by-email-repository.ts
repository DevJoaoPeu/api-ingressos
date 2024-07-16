import { prisma } from "../../prisma/PrismaClient/prisma"

export class FindUserByEmailRepository {
  async execute(email: string) {
    return await prisma.user.findUnique({
      where: {
        email: email,
      },
    })
  }
}
