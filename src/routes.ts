import { Router, Request, Response } from "express"
import { makeCreateUserController } from "@/factories/user/user"

const router = Router()

router.post("/user/register", async (request: Request, response: Response) => {
  const createUserController = makeCreateUserController()
  const { statusCode, body } = await createUserController.execute(request)

  response.status(statusCode).send(body)
})

export { router }
