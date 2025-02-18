import {computed, map} from 'nanostores';
import {basketItems} from "@app/store/basket.ts";

type Step = {
    min: number | null
    max: number | null
}
type Present = {
    id: string | number,
    img?: string,
    name: string,
    compound?: string,
    price: number
}

export const presents = map({})
export const presentInit = (props: any): void => {
    presents.set({})
    if (!props.length) return
    props.forEach((i: Present) => presents.setKey(i.id, i))
}
export const presentsSteps = computed(presents, presents => {
    return Object.values(presents).reduce((val: Step, i: Present)  => {
        return {
            min: val.min === null ? i.price : val.min > i.price ? i.price: val.min,
            max: val.max === null ? i.price : val.max < i.price ? i.price: val.min,
        }
    }, {min: null, max: null})
})