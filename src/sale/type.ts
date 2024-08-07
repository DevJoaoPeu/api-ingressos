import { Sale } from "@prisma/client"

export interface IHttpParamsSale {
  body: Sale
}

export interface ISaleIdParams {
  params: {
    saleId: string
  }
}
