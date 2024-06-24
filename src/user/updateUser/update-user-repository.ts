import { prisma } from "@/prisma/PrismaClient/prisma"
import { ICreateUserParams } from "@/user/type"

export class UpdateUserRepository {
  async execute(userId: string, updateUserParams: Partial<ICreateUserParams>) {
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
