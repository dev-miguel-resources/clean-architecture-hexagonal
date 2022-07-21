import { rest } from 'msw'
import { response } from './response'
import { AchiviementMother } from '../tests/achievement-mother'

export const handlers = [
    rest.get(`http://localhost:8080/achievements`, (_req, _, ctx ) =>
      response(ctx.json([AchiviementMother.learnArchitectureDto()])),
    ),
]
