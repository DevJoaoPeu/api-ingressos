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
  makeDeleteEventController,
  makeFindAllEventsByUserIdController,
  makeFindEventByIdController,
  makeUpdateEventController,
} from "./factories/event/event"
import { IEventByIdParams } from "./event/types"
import { isAuthenticated } from "./middlewares"
import {
  makeCreateTicketController,
  makeFindAllTicketsByEventIdController,
  makeFindTicketByIdController,
  makeFindTicketByTypeController,
} from "./factories/ticket/ticket"
import { IFindTicketParamsId, IParamsFindAllTicketId } from "./ticket/type"

const router = Router()

router.post("/user/register", async (request: Request, response: Response) => {
  const createUserController = makeCreateUserController()
  const { statusCode, body } = await createUserController.execute(request)

  response.status(statusCode).send(body)
})

router.patch(
  "/user/update/:userId",
  isAuthenticated,
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
  isAuthenticated,
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
  isAuthenticated,
  async (
    request: Request<{ userId: string }, IUserByIdParams>,
    response: Response
  ) => {
    const findUserByIdController = makeFindUserByIdController()
    const { statusCode, body } = await findUserByIdController.execute(request)

    response.status(statusCode).send(body)
  }
)

router.post(
  "/event/create",
  isAuthenticated,
  async (request: Request, response: Response) => {
    const createEventController = makeCreateEventController()

    const { statusCode, body } = await createEventController.execute(request)

    response.status(statusCode).send(body)
  }
)

router.get(
  "/event/findAll/:userId",
  isAuthenticated,
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
  isAuthenticated,
  async (
    request: Request<{ eventId: string }, IEventByIdParams>,
    response: Response
  ) => {
    const findEventByIdController = makeFindEventByIdController()

    const { statusCode, body } = await findEventByIdController.execute(request)

    response.status(statusCode).send(body)
  }
)

router.patch(
  "/event/update/:eventId",
  isAuthenticated,
  async (
    request: Request<{ eventId: string }, IEventByIdParams>,
    response: Response
  ) => {
    const updateEventController = makeUpdateEventController()

    const { statusCode, body } = await updateEventController.execute(request)

    response.status(statusCode).send(body)
  }
)

router.delete(
  "/event/delete/:eventId",
  isAuthenticated,
  async (
    request: Request<{ eventId: string }, IEventByIdParams>,
    response: Response
  ) => {
    const deleteEventController = makeDeleteEventController()

    const { statusCode, body } = await deleteEventController.execute(request)

    response.status(statusCode).send(body)
  }
)

router.post("/ticket/create", async (request: Request, response: Response) => {
  const createTicketController = makeCreateTicketController()

  const { statusCode, body } = await createTicketController.execute(request)

  response.status(statusCode).send(body)
})

router.get(
  "/ticket/find/:ticketId",
  async (
    request: Request<{ ticketId: string }, IFindTicketParamsId>,
    response: Response
  ) => {
    const findTicketByIdController = makeFindTicketByIdController()

    const { statusCode, body } = await findTicketByIdController.execute(request)

    response.status(statusCode).send(body)
  }
)

router.get(
  "/ticket/findAll/:eventId",
  async (
    request: Request<{ eventId: string }, IEventByIdParams>,
    response: Response
  ) => {
    const findTicketsByEventIdController =
      makeFindAllTicketsByEventIdController()

    const { statusCode, body } = await findTicketsByEventIdController.execute(
      request
    )

    response.status(statusCode).send(body)
  }
)

router.get(
  "/ticket/findTicket/:eventId/:type",
  async (
    request: Request<{ eventId: string; type: string }, IParamsFindAllTicketId>,
    response: Response
  ) => {
    const findTicketByTypeController = makeFindTicketByTypeController()

    const { statusCode, body } = await findTicketByTypeController.execute(
      request
    )

    response.status(statusCode).send(body)
  }
)

export { router }
