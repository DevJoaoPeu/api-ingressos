import { DeleteUserRepository } from "./delete-user-repository"

export class DeleteUserUseCase {
  constructor(private readonly deleteUserRepository: DeleteUserRepository) {}

  async execute(userId: string) {
    const deleteUser = this.deleteUserRepository.execute(userId)

    return deleteUser
  }
}
