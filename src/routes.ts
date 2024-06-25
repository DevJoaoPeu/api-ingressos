import { Router, Request, Response } from "express"
import {
  makeCreateUserController,
  makeDeleteUserController,
  makeFindUserByIdController,
  makeSessionUserController,
  makeUpdateUserController,
} from "@/factories/user/user"
import { ICreateUserParams, IUserByIdParams } from "./user/type"
import {
  makeCreateEventController,
  makeFindAllEventsByUserIdController,
  makeFindEventByIdController,
} from "./factories/event/event"
import { IEventByIdParams } from "./event/types"

const router = Router()

router.post("/user/register", async (request: Request, response: Response) => {
  const createUserController = makeCreateUserController()
  const { statusCode, body } = await createUserController.execute(request)

  response.status(statusCode).send(body)
})

router.patch(
  "/user/update/:userId",
  async (
    request: Request<{ userId: string }, ICreateUserParams>,
    response: Response
  ) => {
    const updateUserController = makeUpdateUserController()
    const { statusCode, body } = await updateUserController.execute(request)

    response.status(statusCode).send(body)
  }
)

router.post("/user/session", async (request: Request, response: Response) => {
  const sessionUserController = makeSessionUserController()
  const { statusCode, body } = await sessionUserController.execute(request)

  response.status(statusCode).send(body)
})

router.delete(
  "/user/delete/:userId",
  async (
    request: Request<{ userId: string }, IUserByIdParams>,
    response: Response
  ) => {
    const deleteUserController = makeDeleteUserController()
    const { statusCode, body } = await deleteUserController.execute(request)

    response.status(statusCode).send(body)
  }
)

router.get(
  "/user/find/:userId",
  async (
    request: Request<{ userId: string }, IUserByIdParams>,
    response: Response
  ) => {
    const findUserByIdController = makeFindUserByIdController()
    const { statusCode, body } = await findUserByIdController.execute(request)

    response.status(statusCode).send(body)
  }
)

router.post("/event/create", async (request: Request, response: Response) => {
  const createEventController = makeCreateEventController()

  const { statusCode, body } = await createEventController.execute(request)

  response.status(statusCode).send(body)
})

router.get(
  "/event/findAll/:userId",
  async (
    request: Request<{ userId: string }, IUserByIdParams>,
    response: Response
  ) => {
    const findAllEventsByUserIdController =
      makeFindAllEventsByUserIdController()

    const { statusCode, body } = await findAllEventsByUserIdController.execute(
      request
    )

    response.status(statusCode).send(body)
  }
)

router.get(
  "/event/findOne/:eventId",
  async (
    request: Request<{ eventId: string }, IEventByIdParams>,
    response: Response
  ) => {
    const findEventByIdController = makeFindEventByIdController()

    const { statusCode, body } = await findEventByIdController.execute(request)

    response.status(statusCode).send(body)
  }
)

export { router }
