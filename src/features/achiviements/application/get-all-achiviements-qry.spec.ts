import { GetAllAchiviementsQry } from './get-all-achiviements-qry'
import { mock, instance, when } from 'ts-mockito'
import { AchiviementRepository } from '../domain/achiviement-repository'
import { Achiviement } from '../domain/achiviement'

describe('GetAllAchiviementsUseCase', () => {
  it('should get all the achiviements', async () => {
    //Given: Preparación del Mock
    const achiviementRepository = mock<AchiviementRepository>()
    const getAllAchiviementsUseCase = new GetAllAchiviementsQry(instance(achiviementRepository))
    when(achiviementRepository.findAll()).thenResolve([
      { id: 'sfn-sfin-aseb', name: 'Learn Hexagonal Architecture with TS', date: new Date('2022-06-22') },
    ])

    //When: Ejecución del test asociado al caso de uso
    const actual = await getAllAchiviementsUseCase.execute()

    //Then: Que verifica el sentido de assertion
    expect(actual).toEqual<Achiviement[]>([
      { id: 'sfn-sfin-aseb', name: 'Learn Hexagonal Architecture with TS', date: new Date('2022-06-22') },
    ])
  })
})
