import { ControllerTicket, TicketType } from "@prisma/client"

export interface IHttpCreateControlleTicketParams {
  body: ControllerTicket
}

export interface IFindControlleTicketParams {
  eventId: string
  type?: TicketType
}

export interface IHttpParamsFindControlleTicket {
  body: IFindControlleTicketParams
}

export interface IHttpParamsControlleTicket {
  params: {
    controlleTicketId: string
  }
}
