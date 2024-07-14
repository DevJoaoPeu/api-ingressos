import { sign } from "jsonwebtoken"

export const token = (id: string, email: string, role?: string) => {
  const token = sign(
    {
      id,
      email,
      role,
    },
    process.env.JWT_SECRET as string,
    {
      subject: id,
      expiresIn: "30d",
    }
  )

  return token
}
