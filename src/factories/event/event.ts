import { CreateEventController } from "@/event/createEvent/create-event-controller"
import { CreateEventRepository } from "@/event/createEvent/create-event-repository"
import { CreateEventUseCase } from "@/event/createEvent/create-event-use-case"
import { FindAllEventsByUserIdController } from "@/event/findAllEventsByUserId/find-all-events-controller"
import { FindAllEventsByUserIdRepository } from "@/event/findAllEventsByUserId/find-all-events-repository"
import { FindAllEventsByUserIdUseCase } from "@/event/findAllEventsByUserId/find-all-events-use-case"
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

export const makeFindAllEventsByUserIdController = () => {
  const findAllEventsByUserIdRepository = new FindAllEventsByUserIdRepository()
  const findAllEventsByUserIdUseCase = new FindAllEventsByUserIdUseCase(
    findAllEventsByUserIdRepository
  )

  const findAllEventsByUserIdController = new FindAllEventsByUserIdController(
    findAllEventsByUserIdUseCase
  )

  return findAllEventsByUserIdController
}
