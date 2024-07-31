import { Router, Request, Response } from "express"
import {
  makeCreateUserController,
  makeDeleteUserController,
  makeFindUserByIdController,
  makeSessionUserController,
  makeUpdateUserController,
  makeValidationUserController,
} from "./factories/user"
import { IUserByIdParams, IValidationUser } from "./user/type"
import {
  makeCreateEventController,
  makeDeleteEventController,
  makeFindAllEventsByUserIdController,
  makeFindAllEventsController,
  makeFindEventByIdController,
  makeUpdateEventController,
} from "./factories/event"
import { IEventByIdParams } from "./event/types"
import { isAuthenticated, isRoleAuthenticated } from "./middlewares"
import {
  makeCreateTicketController,
  makeDeleteTicketController,
  makeFindAllTicketsByEventIdController,
  makeFindTicketByIdController,
  makeFindTicketByTypeController,
  makeFindTicketByUserIdController,
} from "./factories/ticket"
import { IFindTicketParamsId, IParamsFindAllTicketId } from "./ticket/type"
import { TicketType, User } from "@prisma/client"
import {
  makeCreateControlleTicketController,
  makeDeleteControlleTicketController,
  makeFindControlleTicketByEventIdController,
} from "./factories/controlleTicket"
import {
  makeCreateSaleController,
  makeDeleteSaleController,
  makeFindAllSalesByUserIdController,
  makeFindSaleByIdController,
} from "./factories/sale"

const router = Router()

router.post("/user/register", async (request: Request, response: Response) => {
  const createUserController = makeCreateUserController()
  const { statusCode, body } = await createUserController.execute(request)

  response.status(statusCode).send(body)
})

router.patch(
  "/user/update/:userId",
  isAuthenticated,
  async (request: Request<{ userId: string }, User>, response: Response) => {
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
  isRoleAuthenticated,
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

router.post(
  "/ticket/create",
  isAuthenticated,
  async (request: Request, response: Response) => {
    const createTicketController = makeCreateTicketController()

    const { statusCode, body } = await createTicketController.execute(request)

    response.status(statusCode).send(body)
  }
)

router.get(
  "/ticket/find/:ticketId",
  isAuthenticated,
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
  isAuthenticated,
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
  isAuthenticated,
  async (
    request: Request<
      { eventId: string; type: TicketType },
      IParamsFindAllTicketId
    >,
    response: Response
  ) => {
    const findTicketByTypeController = makeFindTicketByTypeController()

    const { statusCode, body } = await findTicketByTypeController.execute(
      request
    )

    response.status(statusCode).send(body)
  }
)

router.get(
  "/ticket/user/findTickets/:userId",
  isAuthenticated,
  async (
    request: Request<{ userId: string }, IUserByIdParams>,
    response: Response
  ) => {
    const findTicketByUserIdController = makeFindTicketByUserIdController()

    const { statusCode, body } = await findTicketByUserIdController.execute(
      request
    )

    response.status(statusCode).send(body)
  }
)

router.delete(
  "/ticket/delete/:eventId",
  isAuthenticated,
  async (
    request: Request<{ eventId: string }, IEventByIdParams>,
    response: Response
  ) => {
    const deleteTicketsController = makeDeleteTicketController()

    const { statusCode, body } = await deleteTicketsController.execute(request)

    response.status(statusCode).send(body)
  }
)

router.post(
  "/controlleTicket/create",
  isAuthenticated,
  async (request: Request, response: Response) => {
    const createControlleTicketController =
      makeCreateControlleTicketController()

    const { statusCode, body } = await createControlleTicketController.execute(
      request
    )

    response.status(statusCode).send(body)
  }
)

router.get(
  "/controlleTicket/find/:eventId",
  isAuthenticated,
  async (
    request: Request<{ eventId: string }, any, any, { type: TicketType }>,
    response: Response
  ) => {
    const findControlleTicketByEventIdController =
      makeFindControlleTicketByEventIdController()

    const { statusCode, body } =
      await findControlleTicketByEventIdController.execute(request)

    response.status(statusCode).send(body)
  }
)

router.delete(
  "/controlleTicket/delete/:controlleTicketId",
  isAuthenticated,
  async (
    request: Request<{ controlleTicketId: string }>,
    response: Response
  ) => {
    const findControlleTicketByEventIdController =
      makeDeleteControlleTicketController()

    const { statusCode, body } =
      await findControlleTicketByEventIdController.execute(request)

    response.status(statusCode).send(body)
  }
)

router.get(
  "/user/me",
  isAuthenticated,
  async (request: Request, response: Response) => {
    const validationUserController = makeValidationUserController()

    const validationUserRequest: IValidationUser = {
      headers: {
        authorization: request.headers.authorization || "",
      },
    }

    const { statusCode, body } = await validationUserController.execute(
      validationUserRequest
    )

    response.status(statusCode).send(body)
  }
)

router.post(
  "/sale/create",
  isAuthenticated,
  async (request: Request, response: Response) => {
    const createSaleController = makeCreateSaleController()

    const { statusCode, body } = await createSaleController.execute(request)

    response.status(statusCode).send(body)
  }
)

router.get(
  "/event/findAll",
  isAuthenticated,
  async (request: Request, response: Response) => {
    const findAllEventscontroller = makeFindAllEventsController()

    const { statusCode, body } = await findAllEventscontroller.execute()

    response.status(statusCode).send(body)
  }
)

router.get(
  "/sale/findAll/:userId",
  isAuthenticated,
  async (request: Request<{ userId: string }>, response: Response) => {
    const findAllSalesByUserIdController = makeFindAllSalesByUserIdController()

    const { statusCode, body } = await findAllSalesByUserIdController.execute(
      request
    )

    response.status(statusCode).send(body)
  }
)

router.get(
  "/sale/findOne/:saleId",
  isAuthenticated,
  async (request: Request<{ saleId: string }>, response: Response) => {
    const findSaleByIdController = makeFindSaleByIdController()

    const { statusCode, body } = await findSaleByIdController.execute(request)

    response.status(statusCode).send(body)
  }
)

router.delete(
  "/sale/delete/:saleId",
  isAuthenticated,
  async (request: Request<{ saleId: string }>, response: Response) => {
    const deleteSaleController = makeDeleteSaleController()

    const { statusCode, body } = await deleteSaleController.execute(request)

    response.status(statusCode).send(body)
  }
)

export { router }
