import { FindUserByIdRepository } from "./find-user-by-id-repository"

export class FindUserByIdUseCase {
  constructor(
    private readonly findUserByIdRepository: FindUserByIdRepository
  ) {}

  async execute(userId: string) {
    const user = await this.findUserByIdRepository.execute(userId)

    return user
  }
}
