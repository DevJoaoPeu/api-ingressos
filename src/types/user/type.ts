export interface ICreateUserParams {
  email: string
  name: string
  password: string
}

export interface IHttpRequest {
  body: ICreateUserParams
}
