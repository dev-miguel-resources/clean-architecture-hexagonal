import { AchievementCreate } from '../domain/achievement-create'
import { inject, injectable } from 'tsyringe'
import type { AchiviementRepository } from '../domain/achiviement-repository'
import { ACHIVIEMENT_REPOSITORY } from '../../../core/dependency-injection/injection-tokens'
import { Command } from '../../../core/use-cases/command'

@injectable()
export class CreateAchievementCmd extends Command<AchievementCreate, void> {
  constructor(@inject(ACHIVIEMENT_REPOSITORY) private readonly achievementRepository: AchiviementRepository) {
    super()
  }

  async internalExecute(achievementCreate: AchievementCreate) {
    await this.achievementRepository.create(achievementCreate)
    return
  }

  /*async execute(achievementCreate: AchievementCreate) {
    await this.achievementRepository.create(achievementCreate)
    return
  }*/
}
