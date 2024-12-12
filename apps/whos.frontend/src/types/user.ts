import { Policies, RoleTypes } from "./auth"

export interface IUser {
    name: string
    email: string
    role: RoleTypes,
    tenant: string
    policies: Policies[]
}