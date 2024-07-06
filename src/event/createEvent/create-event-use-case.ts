import { FindUserByIdRepository } from "@/user/findUserById/find-user-by-id-repository"
import { CreateEventRepository } from "./create-event-repository"
import { DateInvalid, IdNotFound } from "@/erros/errors"
import { Event } from "@prisma/client"

export class CreateEventUseCase {
  constructor(
    private readonly createEventRepository: CreateEventRepository,
    private readonly findUserByIdRepository: FindUserByIdRepository
  ) {}
  async execute(createEventParams: Event) {
    const findUserId = await this.findUserByIdRepository.execute(
      createEventParams.userId
    )

    if (!findUserId) {
      throw new IdNotFound()
    }

    if (createEventParams.dtEnd <= createEventParams.dtStart) {
      throw new DateInvalid()
    }

    const event = await this.createEventRepository.execute(createEventParams)

    return event
  }
}
