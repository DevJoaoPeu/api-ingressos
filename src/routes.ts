import { Router, Request, Response } from "express"
import {
  makeCreateUserController,
  makeSessionUserController,
  makeUpdateUserController,
} from "@/factories/user/user"
import { ICreateUserParams } from "./user/type"

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

export { router }
