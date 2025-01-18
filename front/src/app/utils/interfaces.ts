export interface Card {
    id: string | number;
    name: string;
    category: any;
    status: any;
    description: string;
    price: number;
    oldPrice?: number;
    weight: number | string;
    img: string;
    amount?: number
}
export interface CardOrder {
    id: string | number
    name: string
    price: number
    amount: number
    description?: string
    img?: string
    weight?: string
}

export interface CardAdditional {
    id: string | number
    name: string
    price: number
    img?: string
    weight?: string
}

export interface Input {
    type?: string
    name?: string
    color?: string
    placeholder?: string
    modelValue: string | number
    readonly?: boolean
    label?: string
}

export interface Checkbox {
    type?: string
    name?: string
    modelValue: any
    value: string | number | boolean
    readonly?: boolean
    required?: any
}

export interface Select {
    placeholder?: string
    modelValue: string | number
}

export interface Radio {
    name?: string
    value: string
    modelValue: string | number
    readonly?: boolean
}

export interface Boolean {
    name?: string
    modelValue: boolean
}

export interface FormOrder {
    name: string
    phone: string
    method: string
    address?: string
    filial?: string
    payment: string
    time: string
    promo?: string
    bonus?: ''
    comment?: string
    persons?: string
    day?: string
    hour?: string
}

export interface Successfully {
    id: string | number
    name: string
    img?: string
    video?: string
    circle?: string
}

export interface SeoTabs {
    id: string;
    title: string;
    description: string;
    img: string;
}

export interface MapDelivery {
    label?: string
    img: string
}