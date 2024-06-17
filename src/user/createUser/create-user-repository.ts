import { ICreateUserParams } from "@/types/user/type"
import { prisma } from "@/prisma/PrismaClient/prisma"

export class CreateUserRepository {
  async execute(createUserParams: ICreateUserParams) {
    return await prisma.user.create({
      data: {
        name: createUserParams.name,
        email: createUserParams.email,
        password: createUserParams.password,
      },
    })
  }
}
