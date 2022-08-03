import { container } from "tsyringe"
import { ACHIVIEMENT_REPOSITORY, HTTP_CLIENT } from "./injection-tokens"
import { AchiviementHttpRepository } from "../../features/achiviements/infraestructure/achiviement-http-repository"
import { httpClient } from "../http-client/http-client"

container.register(ACHIVIEMENT_REPOSITORY, AchiviementHttpRepository)
container.registerInstance(HTTP_CLIENT, httpClient)

export { container }
