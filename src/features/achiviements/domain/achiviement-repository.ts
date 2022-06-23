import { Achiviement } from './achiviement'
import { FindableAll } from '../../../core/repositories/findable-all'

// Design Pattern: Composition
export interface AchiviementRepository extends FindableAll<Achiviement> {}
