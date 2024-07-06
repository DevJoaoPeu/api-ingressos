import { Ticket } from "@prisma/client"

export enum TicketType {
  PISTA,
  VIP,
}

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
