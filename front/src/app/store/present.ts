import {computed, map} from 'nanostores';

export const presents = map({
    1: {
        id: 1,
        img: '/img/products/1.jpg',
        name: 'Салат корейский',
        compound: 'Семга терияки, сливочный сыр, огурец, стружка тунца',
        price: 500
    },
    2: {
        id: 2,
        img: '/img/products/1.jpg',
        name: 'Бонито',
        compound: 'Семга терияки, сливочный сыр, огурец, стружка тунца',
        price: 1500
    },
    3: {
        id: 3,
        img: '/img/products/1.jpg',
        name: 'Цезарь эби',
        compound: 'Семга терияки, сливочный сыр, огурец, стружка тунца',
        price: 2000
    },
    4: {
        id: 4,
        img: '/img/products/1.jpg',
        name: 'Семга терияки',
        compound: 'Семга терияки, сливочный сыр, огурец, стружка тунца',
        price: 2500
    }
})
export const presentsSteps = computed(presents, presents => {
    return Object.values(presents).reduce((val, i) => {
        return {
            min: val.min === null ? i.price : val.min > i.price ? i.price: val.min,
            max: val.max === null ? i.price : val.max < i.price ? i.price: val.min,
        }
    }, {min: null, max: null})
})