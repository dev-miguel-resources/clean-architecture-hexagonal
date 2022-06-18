import { Id } from "../../../core/types/id"

export interface Achiviement {
    id: Id
    name: string
    date: Date
}

export interface User {
    id: Id
    name: string
    lastname: string
}