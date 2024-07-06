import { prisma } from "@/prisma/PrismaClient/prisma"
import { User } from "@prisma/client"

export class CreateUserRepository {
  async execute(createUserParams: User) {
    return await prisma.user.create({
      data: {
        name: createUserParams.name,
        email: createUserParams.email,
        password: createUserParams.password,
      },
    })
  }
}
