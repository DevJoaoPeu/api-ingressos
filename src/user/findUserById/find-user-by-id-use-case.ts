import { FindUserByIdRepository } from "./find-user-by-id-repository"

export class FindUserByIdUseCase {
  constructor(private readonly findUserByIdRepository: FindUserByIdRepository) {
    this.findUserByIdRepository = findUserByIdRepository
  }

  async execute(userId: string) {
    const user = this.findUserByIdRepository.execute(userId)

    return user
  }
}
