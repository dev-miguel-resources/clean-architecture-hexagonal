
import { context, response as responseMSW } from 'msw'
import { ResponseTransformer } from 'msw/lib/types/response'

const isTestMode = process.env.NODE_ENV === 'test'

export function response(...transfomers: ResponseTransformer[]) {
    if (isTestMode) {
        return responseMSW(...transfomers)
    }
    return responseMSW(...transfomers, context.delay())
}
