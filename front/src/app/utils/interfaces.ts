export interface CardAdditional {
    id: string | number
    name: string
    price: number
    img?: string
    weight?: string
}

export type Input = {
    type?: string
    name?: string
    color?: string
    placeholder?: string
    modelValue: any
    readonly?: boolean
    label?: string
    mask?: string
    error?: string
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
    modelValue: string | number | undefined
}

export interface Radio {
    name?: string
    value: string
    modelValue: string | number | undefined
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

export type Social = {
    id: number;
    img: string;
    link?: string;
    linkImg?: string;
};