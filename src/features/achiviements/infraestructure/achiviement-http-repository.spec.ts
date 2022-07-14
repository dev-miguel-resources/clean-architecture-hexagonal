import { AchiviementHttpRepository } from "./achiviement-http-repository";
import { instance, mock, when } from "ts-mockito";
import { AchiviementMother } from "../../../tests/achievement-mother";
import { HttpClient } from "../../../core/http-client/http-client";
import { AxiosResponse } from "axios";
import { Achiviement } from './../domain/achiviement';

describe('AchievmentHttpRepository', () => {
    it('should get the achievements', async () => {
        const { achievementHttpRepository, httpClient } = setup()
        when(httpClient.get('/achievements')).thenResolve({
            data: [AchiviementMother.learnArchitectureDto()],
        } as AxiosResponse)

        const actual = await achievementHttpRepository.findAll()

        expect(actual).toEqual<Achiviement[]>([AchiviementMother.learnArchitecture()])
    })
})

function setup() {
    const httpClient = mock<HttpClient>()

    return {
        httpClient,
        achievementHttpRepository: new AchiviementHttpRepository(instance(httpClient)), 
    }
}