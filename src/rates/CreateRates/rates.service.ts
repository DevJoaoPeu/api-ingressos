import { Rates } from "@prisma/client"
import { CreateRatesRepository } from "./rates.repository"

export class CreateRatesService {
  constructor(private readonly createRatesRepository: CreateRatesRepository) {}
  async execute(createRatesParams: Rates) {
    return await this.createRatesRepository.execute(createRatesParams)
  }
}
