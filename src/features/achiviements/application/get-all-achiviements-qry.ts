import { ACHIVIEMENT_REPOSITORY } from './../../../core/dependency-injection/injection-tokens'
import { inject, injectable } from 'tsyringe'
import { Achiviement } from '../domain/achiviement'
import type { AchiviementRepository } from '../domain/achiviement-repository'
import { Query } from '../../../core/use-cases/query'

@injectable()
export class GetAllAchiviementsQry extends Query<void, Achiviement[]> {
  constructor(@inject(ACHIVIEMENT_REPOSITORY) private readonly achiviementRepository: AchiviementRepository) {
    super()
  }

  /*execute(): Promise<Achiviement[]> {
    return this.achiviementRepository.findAll()
  }*/

  internalExecute(): Promise<Achiviement[]> {
    return this.achiviementRepository.findAll()
  }
}
