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
