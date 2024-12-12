import { RoleTypes } from "./auth"

export interface ICookies {
    authToken: string
    refreshToken?: string
    userRole: RoleTypes
    tenantID: string
}