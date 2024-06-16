import { ICreateUser } from "@/types/user/type"
import { prisma } from "../../prisma/PrismaClient/prisma"

export class CreateUserRepository {
  async execute(createUserParams: ICreateUser) {
    return await prisma.user.create({
      data: {
        name: createUserParams.name,
        email: createUserParams.email,
        password: createUserParams.password,
      },
    })
  }
}
