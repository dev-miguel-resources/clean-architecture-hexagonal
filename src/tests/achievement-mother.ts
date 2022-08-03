import { Achiviement } from "../features/achiviements/domain/achiviement"
import { AchiviementDto } from "../features/achiviements/infraestructure/achiviement-dto"

export class AchiviementMother {
  static learnArchitecture(): Achiviement {
    return { id: "sfn-sfin-aseb", name: "Learn Hexagonal Architecture with TS", date: new Date("2022-06-22") }
  }

  static learnArchitectureDto(): AchiviementDto {
    return { id: "sfn-sfin-aseb", name: "Learn Hexagonal Architecture with TS", date: "2022-06-22" }
  }
  static learnArchitectureDto2(): AchiviementDto {
    return { id: "sfn-sfin-aseb", name: "Learn Hexagonal Architecture with TS", date: "2022-06-22" }
  }
}
