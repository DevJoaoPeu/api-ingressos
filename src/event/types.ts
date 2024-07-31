import { Event, TicketType } from "@prisma/client"
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

export interface IHttpListTickets {
  eventId: string
  type: TicketType
}
