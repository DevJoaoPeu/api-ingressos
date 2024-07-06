import { Event } from "@prisma/client"
export interface IEventHttpRequest {
  body: Event
}

export interface IEventByIdParams {
  params: {
    eventId: string
  }
}

export interface IUpdateEventParams
  extends IEventHttpRequest,
    IEventByIdParams {}
