import {map, atom} from 'nanostores';

// export const blockInfo = map({})
export const blockNavigation = atom({})
export const branches = atom(null)
export const branchesActive = atom({})
export const branchesChange = (id) => {
    branchesActive.set({})
    branchesActive.set(branches.value.find(i => i.id === id))
}

export const blockInfo = (data: any): void => {
    blockNavigation.set(data.nav)
    branches.set(data.branches)
    branchesActive.set(branches.value[0])
}
