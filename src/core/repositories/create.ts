// principio SOLID de Segregración y Responsabilidad Única
export interface Creatable<Entity> {
    create(entity: Entity): Promise<void>
}