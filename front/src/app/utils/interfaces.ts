export interface CardOrder {
    id: string | number
    name: string
    price: number
    amount: number
    description?: string
    img?: string
    weight?: string
}

export interface Input {
    type?: string
    name?: string
    placeholder?: string
    modelValue: string | number
    readonly?: boolean
    label?: string
}

export interface Radio {
    name: string
    value: string
    modelValue: string | number
    readonly?: boolean
}

export interface Boolean {
    name?: string
    modelValue: boolean
}