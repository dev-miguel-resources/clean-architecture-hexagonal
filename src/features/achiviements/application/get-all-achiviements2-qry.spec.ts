import { AchiviementMother } from "../../../tests/achievement-mother"
import { GetAllAchiviementsQry } from "./get-all-achiviements-qry"
import { mock, instance, when } from "ts-mockito"
import { AchiviementRepository } from "../domain/achiviement-repository"
import { Achiviement } from "../domain/achiviement"

describe("GetAllAchiviementsUseCase", () => {
  it("should get all the achiviements", async () => {
    const { achiviementRepository, getAllAchiviementsUseCase } = setup()
    when(achiviementRepository.findAll()).thenResolve([AchiviementMother.learnArchitecture()])

    const actual = await getAllAchiviementsUseCase.internalExecute()

    expect(actual).toEqual<Achiviement[]>([AchiviementMother.learnArchitecture()])
  })
})

function setup() {
  const achiviementRepository = mock<AchiviementRepository>()
  const getAllAchiviementsUseCase = new GetAllAchiviementsQry(instance(achiviementRepository))

  return { achiviementRepository, getAllAchiviementsUseCase }
}
