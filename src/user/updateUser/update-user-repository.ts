import { prisma } from "../../prisma/PrismaClient/prisma"
import { User } from "@prisma/client"

export class UpdateUserRepository {
  async execute(userId: string, updateUserParams: Partial<User>) {
    try {
      return await prisma.user.update({
        where: {
          id: userId,
        },
        data: updateUserParams,
      })
    } catch (error) {
      return null
    }
  }
}
