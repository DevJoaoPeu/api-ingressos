import { DeleteSaleRepository } from "./delete-sale-repository"

export class DeleteSaleUseCase {
  constructor(private readonly deleteSaleRepository: DeleteSaleRepository) {}
  async execute(saleId: string) {
    const deleteSale = await this.deleteSaleRepository.execute(saleId)

    return deleteSale
  }
}
