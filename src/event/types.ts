export interface ICreateEventParams {
  name: string
  userId: string
  dtStart: Date
  dtEnd: Date
  location: string
}

export interface IEventHttpRequest {
  body: ICreateEventParams
}

export interface IEventByIdParams {
  params: {
    userId: string
  }
}
