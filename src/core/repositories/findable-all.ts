// principio SOLID de Segregración y Responsabilidad Única
export interface FindableAll<Result> {
     findAll(): Promise<Result[]>   
}