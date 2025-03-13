export function serverCookies(cookies) {
    const token = cookies.get('token')?.value
    let basket = '',
        favorites = '';


    if (!token) {
        basket = cookies.get('basket')?.value
        favorites = cookies.get('favorites')?.value
    }
    return {favorites, basket, token}
}