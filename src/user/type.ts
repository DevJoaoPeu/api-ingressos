import { User } from "@prisma/client"

export interface ICreateHttpRequest {
  body: User
}

export interface IUpdateUserParams {
  body?: Partial<User>
  params: {
    userId: string
  }
}

export interface ISessionUserParams {
  email: string
  password: string
}

export interface ISessionHttpRequest {
  body: ISessionUserParams
}
export interface IUserByIdParams {
  params: {
    userId: string
  }
}

export interface IValidationUser {
  headers: {
    authorization: string
  }
}
