import { FindUserByIdRepository } from "@/user/findUserById/find-user-by-id-repository"
import { ICreateEventParams } from "../types"
import { CreateEventRepository } from "./create-event-repository"
import { badRequest } from "@/erros/helpers/http"
import { userNotFoundResponse } from "@/erros/helpers/validation"

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
      return userNotFoundResponse()
    }

    if (createEventParams.dtEnd > createEventParams.dtStart) {
      badRequest({
        message: "End date cannot be greater than start date",
      })
    }

    const event = await this.createEventRepository.execute(createEventParams)

    return event
  }
}
