export abstract class UseCase<Param, Result> {
  abstract readonly: boolean

  async execute(param: Param): Promise<Result> {
    return this.internalExecute(param)

    // chain of responsability (middlewares)

    // redis/react query/archimedes js/graphl caché
    /*if (notAuth) {
            return xxxx
        }*

        /*if (isCached(result)) {
            return cache
        } else {
            const result = await this.internalExecute(param)
            return result
        }*/
  }

  abstract internalExecute(param: Param): Promise<Result>
}
