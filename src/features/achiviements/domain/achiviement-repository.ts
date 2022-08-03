import { Achiviement } from "./achiviement"
import { FindableAll } from "../../../core/repositories/findable-all"
import { Creatable } from "../../../core/repositories/create"
import { AchievementCreate } from "./achievement-create"

export interface AchiviementRepository extends FindableAll<Achiviement>, Creatable<AchievementCreate> {}
