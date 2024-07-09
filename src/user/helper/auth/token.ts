import { sign } from "jsonwebtoken"

export const token = (id: string, email: string) => {
  const token = sign(
    {
      id,
      email,
    },
    process.env.JWT_SECRET as string,
    {
      subject: id,
      expiresIn: "30d",
    }
  )

  return token
}
