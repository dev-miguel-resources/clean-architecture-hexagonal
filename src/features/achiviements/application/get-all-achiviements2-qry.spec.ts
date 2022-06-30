import { AchiviementMother } from "../../../tests/achievement-mother"
import { GetAllAchiviementsQry } from "./get-all-achiviements-qry"
import { mock, instance, when } from 'ts-mockito'
import { AchiviementRepository } from "../domain/achiviement-repository"
import { Achiviement } from "../domain/achiviement"

describe('GetAllAchiviementsUseCase', () => {
    it('should get all the achiviements', async () => {

        //Given: Preparación del Mock
        const { achiviementRepository, getAllAchiviementsUseCase } = setup()
        when(achiviementRepository.findAll()).thenResolve([AchiviementMother.learnArchitecture()])

        //When: Ejecución del test asociado al caso de uso
        const actual = await getAllAchiviementsUseCase.execute()

        //Then: Que verifica el sentido de assertion
        expect(actual).toEqual<Achiviement[]>([AchiviementMother.learnArchitecture()])
    })
})

// setup instances
// useCase cambiarlos por Qry
function setup() {
    const achiviementRepository = mock<AchiviementRepository>()
    const getAllAchiviementsUseCase = new GetAllAchiviementsQry(instance(achiviementRepository))
    return { achiviementRepository, getAllAchiviementsUseCase  }
}