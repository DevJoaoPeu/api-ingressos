import { Router, Request, Response } from "express"
import {
  makeCreateUserController,
  makeUpdateUserController,
} from "@/factories/user/user"

const router = Router()

router.post("/user/register", async (request: Request, response: Response) => {
  const createUserController = makeCreateUserController()
  const { statusCode, body } = await createUserController.execute(request)

  response.status(statusCode).send(body)
})

router.patch(
  "/user/update/:userId",
  async (request: Request, response: Response) => {
    const updateUserController = makeUpdateUserController()
    const { statusCode, body }  = await updateUserController.execute(request)
    
    response.status(statusCode).send(body)
  }
)

export { router }
