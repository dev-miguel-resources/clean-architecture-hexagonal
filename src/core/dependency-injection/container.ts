import { container } from "tsyringe"
import { ACHIVIEMENT_REPOSITORY } from "./injection-tokens"
import { AchiviementHttpRepository } from "../../features/achiviements/infraestructure/achiviement-http-repository"

// register
container.register(ACHIVIEMENT_REPOSITORY, AchiviementHttpRepository)

export { container }