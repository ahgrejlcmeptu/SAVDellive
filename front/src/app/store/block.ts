import {map, atom} from 'nanostores';
import {presentInit} from "@app/store/present.ts";
import {basketInit} from "@app/store/basket";

export const HOST = 'http://localhost:1337'
export const pageInfo = atom({})
export const blockNavigation = atom({
    links: [
        {
            id: '1',
            name: 'О нас',
            href: '/about'
        },
        {
            id: '2',
            name: 'Доставка и оплата',
            href: '/delivery'
        },
        {
            id: '3',
            name: 'Отзывы',
            href: '/reviews'
        },
        {
            id: '4',
            name: 'Контакты',
            href: '/contacts'
        },
        {
            id: '5',
            name: 'Новости',
            href: '/news'
        },
    ],
    highlight: [
        {
            id: '01',
            name: 'Акции',
            highlight: true
        },
    ]
})
export const branches = atom(null)
export const branchesActive = atom({})
export const branchesChange = (id) => {
    branchesActive.set({})
    branchesActive.set(branches.value.find(i => i.id === id))
}

export const blockInfo = (data: any): boolean => {
    pageInfo.set(data)
    blockNavigation.set({...blockNavigation.value, ...data.nav})
    branches.set(data.branches)
    if (branches.value) branchesActive.set(branches.value[0])
    basketInit(data.basket)
    presentInit(pageInfo.value.presents || [])

    return true
}
