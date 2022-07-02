import { Achiviement } from '../features/achiviements/domain/achiviement'

export class AchiviementMother {
  static learnArchitecture(): Achiviement {
    return { id: 'sfn-sfin-aseb', name: 'Learn Hexagonal Architecture with TS', date: new Date('2022-06-22') }
  }
}
