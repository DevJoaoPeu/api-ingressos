import { prisma } from "@/prisma/PrismaClient/prisma"
import { ICreateUserParams } from "@/types/user/type"

export class UpdateUserRepository {
  async execute(userId: string, updateUserParams: Partial<ICreateUserParams>) {
    return await prisma.user.update({
      where: {
        id: userId,
      },
      data: updateUserParams,
    })
  }
}
