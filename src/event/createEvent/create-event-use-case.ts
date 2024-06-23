import { FindUserByIdRepository } from "@/user/findUserById/find-user-by-id-repository"
import { ICreateEventParams } from "../types"
import { CreateEventRepository } from "./create-event-repository"
import { DateInvalid, IdNotFound } from "@/erros/event/errors"

export class CreateEventUseCase {
  constructor(
    private readonly createEventRepository: CreateEventRepository,
    private readonly findUserByIdRepository: FindUserByIdRepository
  ) {
    this.createEventRepository = createEventRepository
  }
  async execute(createEventParams: ICreateEventParams) {
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
