import { CreateEventController } from "@/event/createEvent/create-event-controller"
import { CreateEventRepository } from "@/event/createEvent/create-event-repository"
import { CreateEventUseCase } from "@/event/createEvent/create-event-use-case"
import { FindUserByIdRepository } from "@/user/findUserById/find-user-by-id-repository"

export const makeCreateEventController = () => {
  const createEventRepository = new CreateEventRepository()
  const findUserByIdRepository = new FindUserByIdRepository()

  const createEventUseCase = new CreateEventUseCase(
    createEventRepository,
    findUserByIdRepository
  )

  const createEventController = new CreateEventController(createEventUseCase)

  return createEventController
}
