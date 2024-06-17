export interface ICreateUser {
  email: string
  name: string
  password: string
}

export interface ICreateUserBody {
  body: ICreateUser
}
