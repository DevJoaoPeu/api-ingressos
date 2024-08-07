import { verify } from "jsonwebtoken"

interface Payload {
  id: string
  email: string
  role: string
}
export class ValidationUserUseCase {
  execute(token: string) {
    const { id, email, role } = verify(
      token,
      process.env.JWT_SECRET as string
    ) as Payload

    return { id, email, role }
  }
}
