export type UserResponse = {
    id: string
    name: string
    email: string
    company_id: string
}

export type UserCreate = {
    name: string
    email: string
    password: string
}
