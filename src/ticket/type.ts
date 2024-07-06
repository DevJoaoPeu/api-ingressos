import { Ticket, TicketType } from "@prisma/client"
export interface ITicketParams {
  body: Ticket
}

export interface IFindTicketParamsId {
  params: {
    ticketId: string
  }
}

export interface IFindAllTicketId {
  eventId: string
  type: TicketType
}

export interface IParamsFindAllTicketId {
  params: IFindAllTicketId
}
