import { ACHIVIEMENT_REPOSITORY } from './../../../core/dependency-injection/injection-tokens';
import { inject, injectable } from 'tsyringe'
import { Achiviement } from '../domain/achiviement'
import type { AchiviementRepository } from '../domain/achiviement-repository'

@injectable()
export class GetAllAchiviementsQry {
  // Pricipio SOLID: IOC (Inversión de Control)
  //  Design Pattern: Orquestación
  //  Polimorfismo

  constructor(@inject(ACHIVIEMENT_REPOSITORY) private readonly achiviementRepository: AchiviementRepository) {}

  execute(): Promise<Achiviement[]> {
    return this.achiviementRepository.findAll()
  }
}
