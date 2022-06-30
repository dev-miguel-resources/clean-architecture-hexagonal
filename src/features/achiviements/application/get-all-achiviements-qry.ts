import { Achiviement } from '../domain/achiviement'
import { AchiviementRepository } from '../domain/achiviement-repository'

export class GetAllAchiviementsQry {
  // Pricipio SOLID: IOC (Inversión de Control)
  //  Design Pattern: Orquestación
  //  Polimorfismo

  constructor(private readonly achiviementRepository: AchiviementRepository) {}

  execute(): Promise<Achiviement[]> {
    return this.achiviementRepository.findAll()
  }
}
