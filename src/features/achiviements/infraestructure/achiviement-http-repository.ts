import { CantCreateAchievementError } from "./../domain/cant-create-achievement-error"
import { Achiviement } from "../domain/achiviement"
import { AchiviementDto } from "./achiviement-dto"
import { AchiviementRepository } from "../domain/achiviement-repository"
import { inject, injectable } from "tsyringe"
import type { HttpClient } from "../../../core/http-client/http-client"
import { HTTP_CLIENT } from "../../../core/dependency-injection/injection-tokens"
import { AchievementCreate } from "../domain/achievement-create"

@injectable()
export class AchiviementHttpRepository implements AchiviementRepository {
  private static readonly URL = "/achievements"

  constructor(@inject(HTTP_CLIENT) private readonly httpClient: HttpClient) {}

  async findAll(): Promise<Achiviement[]> {
    const response = await this.httpClient.get<AchiviementDto[]>(AchiviementHttpRepository.URL)
    return response.data.map(x => ({ ...x, date: new Date(x.date) }))
  }

  async create(achievementCreate: AchievementCreate): Promise<void> {
    await this.httpClient.post<AchievementCreate>(AchiviementHttpRepository.URL, achievementCreate)
    return
  }

  async createWithControlErrors(achievementCreate: AchievementCreate): Promise<void> {
    try {
      await this.httpClient.post<AchievementCreate>(AchiviementHttpRepository.URL, achievementCreate)
    } catch (e) {
      if (this.httpClient.isAxiosError(e) && e.code === "400") {
        throw new CantCreateAchievementError()
      }
    }
    return
  }
}
