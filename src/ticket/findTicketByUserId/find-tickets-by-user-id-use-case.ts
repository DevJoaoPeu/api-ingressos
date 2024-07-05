import { FindTicketByUserIdRepository } from "./find-tickets-by-user-id-repository"

export class FindTicketByUserIdUseCase {
  constructor(
    private readonly findTicketByUserIdRepository: FindTicketByUserIdRepository
  ) {}
  async execute(userId: string) {
    const tickets = await this.findTicketByUserIdRepository.execute(userId)

    return tickets
  }
}
