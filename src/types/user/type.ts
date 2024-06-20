export interface ICreateUserParams {
  email: string
  name: string
  password: string
}

export interface ICreateHttpRequest {
  body: ICreateUserParams
}

export interface IUpdateUserParams {
  body?: ICreateUserParams
  params: {
    userId: string
  }
}

export type ExecuteResult = { statusCode: number; body: object }
