import { DeleteUserRepository } from "./delete-user-repository"

export class DeleteUserUseCase {
  constructor(private readonly deleteUserRepository: DeleteUserRepository) {
    this.deleteUserRepository = deleteUserRepository
  }

  async execute(userId: string) {
    const deleteUser = this.deleteUserRepository.execute(userId)

    return deleteUser
  }
}
