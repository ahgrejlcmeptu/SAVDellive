// import {categoriesLoad} from "../store/categories";
import {favoritesCookie} from "../store/favorites";
import {getCookie} from "@app/utils/func.ts";
// import {basketLoad} from "../store/basket";
// import {Auth} from "../store/auth";
// import {initUser} from "../store/user";

export function serverCookies(cookies) {
    const token = cookies.get('token')?.value
    let basket = [],
        categories = [],
        favorites = '',
        user = null;


    if (!token) {
        // basket = await basketLoad(cookies.get('basket')?.value)
        favorites = favoritesCookie(cookies.get('favorites')?.value)
        // console.log({favorites: cookies.get('favorites')?.value})
    } else {
        // user = await Auth.me(token)
        // basket = await basketLoad(user.basket)
        // favorites = await favoritesCookie(user.favorites)
        // // basket = user.basket || []
        // // favorites = user.favorites || []
        // initUser(user)
    }
    // categories = await categoriesLoad()
    // return {basket, favorites, categories, user, token}
    return {favorites}
}