import { CreateRatesController } from "../../src/rates/CreateRates/rates.controller"
import { CreateRatesRepository } from "../../src/rates/CreateRates/rates.repository"
import { CreateRatesService } from "../../src/rates/CreateRates/rates.service"

export const makeCreateRatesController = () => {
  const createRatesRepository = new CreateRatesRepository()

  const createRatesService = new CreateRatesService(createRatesRepository)

  const createRatesController = new CreateRatesController(createRatesService)

  return createRatesController
}
