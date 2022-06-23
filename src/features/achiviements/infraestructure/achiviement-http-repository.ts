import { AchiviementDto } from './achiviement-dto'
import { Achiviement } from '../domain/achiviement'
import { AchiviementRepository } from '../domain/achiviement-repository'

export class AchiviementHttpRepository implements AchiviementRepository {
  async findAll(): Promise<Achiviement[]> {
    const achiviementDtos: AchiviementDto[] = [
      { id: 'sfn-sfin-aseb', name: 'Learn Hexagonal Architecture with TS', date: '2022-06-22' },
    ]
    return achiviementDtos.map(x => ({ ...x, date: new Date(x.date) }))
  }
}
