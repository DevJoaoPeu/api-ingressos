import { CreateRatesController } from "../rates/CreateRates/rates.controller"
import { CreateRatesRepository } from "../rates/CreateRates/rates.repository"
import { CreateRatesService } from "../rates/CreateRates/rates.service"

export const makeCreateRatesController = () => {
  const createRatesRepository = new CreateRatesRepository()

  const createRatesService = new CreateRatesService(createRatesRepository)

  const createRatesController = new CreateRatesController(createRatesService)

  return createRatesController
}
