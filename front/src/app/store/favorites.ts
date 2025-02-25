import {computed, map} from 'nanostores';
import {basketItems} from "@app/store/basket.ts";
import {setCookie} from "@app/utils/func.ts";
// import {setCookie} from '../utils/cookie';
// import {http} from '../utils/http';
// import {updateMe, user} from "./user";

export const favoritesItems = map({});
export const favoritesList = map({})
export const favoritesLength = computed(favoritesList, $favoritesList => {
    return  Object.keys($favoritesList).length
});

export const favoritesCookie = (cookie: string = ''): string => {
    favoritesList.set({})
    const json = cookie ? JSON.parse(cookie) : []
    json.forEach((id) => favoritesList.setKey(id, id))
    return cookie
}
//
// export async function favoritesLoad() {
//     favoritesItems.set({})
//     const list = Object.keys(favoritesList.value)
//     if (!list.length) return
//     const products = await http({url: `/api/products?get=${list.join(',')}`})
//     products.forEach(item => favoritesItems.setKey(item.id, item))
//     return favoritesItems.value
// }
//
export async function favoritesToggle(id) {
    favoritesList.get()[id] ? favoritesList.setKey(id, undefined) : favoritesList.setKey(id, id);
    if (favoritesItems.get()[id]) favoritesItems.setKey(id, undefined)
    favoritesSave()
    // if (user.value) {
    //     user.value.favorites = JSON.stringify(Object.values(favoritesList.value))
    //     await updateMe('favorites')
    // } else {
    //     favoritesSave()
    // }
}
//
const favoritesSave = () => {
    setCookie({name: 'favorites', value: JSON.stringify(Object.values(favoritesList.value)), time: 30})
}