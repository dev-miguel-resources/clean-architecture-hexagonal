import { Achiviement } from '../domain/achiviement'
import { AchiviementDto } from './achiviement-dto'
import { AchiviementRepository } from '../domain/achiviement-repository'
import { inject, injectable } from 'tsyringe'
import type { HttpClient } from '../../../core/http-client/http-client'
import { HTTP_CLIENT } from '../../../core/dependency-injection/injection-tokens'

@injectable()
export class AchiviementHttpRepository implements AchiviementRepository {
  
  private static readonly URL = '/achiviements'

  constructor(@inject(HTTP_CLIENT) private readonly httpClient: HttpClient) {}

  async findAll(): Promise<Achiviement[]> {
    const achiviementDtos: AchiviementDto[] = [
      { id: 'sfn-sfin-aseb', name: 'Learn Hexagonal Architecture with TS', date: '2022-06-22' },
    ]
    return achiviementDtos.map(x => ({ ...x, date: new Date(x.date) }))
  }
}
