export interface CardOrder {
    id: string | number
    name: string
    price: number
    amount: number
    description?: string
    img?: string
    weight?: string
}