enum TicketType {
  PISTA,
  VIP,
}
export interface ICreateTicketParams {
  eventId: string
  qtTicket: number
  ownerId?: string
  type: TicketType
  price: number
  dtAvailability: Date
}

export interface ITicketParams {
  body: ICreateTicketParams
}

export interface IFindTicketParamsId {
  params: {
    ticketId: string
  }
}
