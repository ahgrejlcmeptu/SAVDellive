import {map, atom} from 'nanostores';
import {presentInit} from "@app/store/present.ts";
import {basketInit} from "@app/store/basket.ts";

// export const blockInfo = map({})
export const HOST = 'http://localhost:1337'
export const pageInfo = atom({})
export const blockNavigation = atom({highlight: [], links: []})
export const branches = atom(null)
export const branchesActive = atom({})
export const branchesChange = (id) => {
    branchesActive.set({})
    branchesActive.set(branches.value.find(i => i.id === id))
}

export const blockInfo = (data: any): boolean => {
    pageInfo.set(data)
    blockNavigation.set(data.nav)
    branches.set(data.branches)
    branchesActive.set(branches.value[0])
    presentInit(pageInfo.value.presents || [])
    if (pageInfo.value.user) basketInit(pageInfo.value.user.basket || [])
    return true
}
