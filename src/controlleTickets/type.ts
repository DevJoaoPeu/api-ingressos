import { ControllerTicket, TicketType } from "@prisma/client"

export interface IHttpCreateControlleTicketParams {
  body: ControllerTicket
}

export interface IFindControlleTicketParams {
  eventId: string
  type?: TicketType
}

export interface IHttpParamsFindControlleTicket {
  params: {
    eventId: string
  }
  query: {
    type: TicketType
  }
}

export interface IHttpParamsControlleTicket {
  params: {
    controlleTicketId: string
  }
}

export interface IUpdateQtTicket {
  qtSale: number
  id: string
}
