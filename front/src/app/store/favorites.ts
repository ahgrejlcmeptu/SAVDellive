import {computed, map} from 'nanostores';
import {setCookie} from "@app/utils/func.ts";
import {User, user} from "./user";

export const favoritesItems = map({});
export const favoritesList = map({})
export const favoritesLength = computed(favoritesList, $favoritesList => {
    return  Object.keys($favoritesList).length
});

export const favoritesCookie = (cookie: string = ''): string => {
    favoritesList.set({})

    if (user.value) {
        user.value?.favorites.forEach((id) => favoritesList.setKey(id, id));
        return
    }
    const json = cookie ? JSON.parse(cookie) : []
    if (Array.isArray(json)) {
        json.forEach((id) => favoritesList.setKey(id, id));
    } else {
        console.warn('JSON из cookie не является массивом');
    }
}

export async function favoritesLoad(products) {
    favoritesItems.set({})
    products.forEach(item => favoritesItems.setKey(item.documentId, item))
}

export async function favoritesToggle(id) {
    favoritesList.get()[id] ? favoritesList.setKey(id, undefined) : favoritesList.setKey(id, id);
    if (favoritesItems.get()[id]) favoritesItems.setKey(id, undefined)
    favoritesSave()
}

const favoritesSave = async () => {
    if (user.value) {
        user.value.favorites = Object.values(favoritesList.value)
        await User.updateFavorites()
    } else {
        setCookie({name: 'favorites', value: JSON.stringify(Object.values(favoritesList.value)), time: 30})
    }

}