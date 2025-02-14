import {map, atom} from 'nanostores';

// export const blockInfo = map({})
export const pageInfo = atom({})
export const blockNavigation = atom({})
export const branches = atom(null)
export const branchesActive = atom({})
export const branchesChange = (id) => {
    branchesActive.set({})
    branchesActive.set(branches.value.find(i => i.id === id))
}

export const blockInfo = (data: any): void => {
    pageInfo.set(data)
    blockNavigation.set(data.nav)
    branches.set(data.branches)
    branchesActive.set(branches.value[0])
}
