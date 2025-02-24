// import {categoriesLoad} from "../store/categories";
import {favoritesCookie} from "../store/favorites";
// import {basketLoad} from "../store/basket";
// import {Auth} from "../store/auth";
// import {initUser} from "../store/user";

export async function apiGlobal(cookies) {
    const token = cookies.get('token')?.value
    let basket = [],
        favorites: any = [],
        categories = [],
        user = null;


    if (!token) {
        // basket = await basketLoad(cookies.get('basket')?.value)
        favorites = await favoritesCookie(cookies.get('favorites')?.value)
        // console.log({favorites: cookies.get('favorites')?.value})
    } else {
        // user = await Auth.me(token)
        // basket = await basketLoad(user.basket)
        // favorites = await favoritesCookie(user.favorites)
        // // basket = user.basket || []
        // // favorites = user.favorites || []
        // initUser(user)
    }

    return {favorites}
    // categories = await categoriesLoad()
    // return {basket, favorites, categories, user, token}
}