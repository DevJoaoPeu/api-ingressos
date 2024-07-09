import { verify } from "jsonwebtoken"

export class ValidationUserUseCase {
  execute(token: string) {
    const { id, email } = verify(token, process.env.JWT_SECRET as string)

    return { id, email }
  }
}
