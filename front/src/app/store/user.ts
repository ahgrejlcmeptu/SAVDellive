import {http} from "@app/utils/http";
import {atom} from "nanostores";
import {setCookie} from "@app/utils/func";

export const user = atom(null)
export const token = atom(null)


export const Auth = {
    async register(body: any) {
        user.set(null)
        const data = await http(
            {url: `/api/auth/local/register`, method: 'POST', body}
        )

        if (data.jwt) {
            token.set(data.jwt)
            setCookie({name: 'token', value: JSON.stringify(data.jwt), time: 30})
            user.set(data.user)
        }

        return data
    },
    async login(body) {
        user.set(null)
        const data = await http(
            {url: `/api/auth/local`, method: 'POST', body}
        )

        if (data.jwt) {
            token.set(data.jwt)
            setCookie({name: 'token', value: JSON.stringify(data.jwt), time: 30})
            user.set(data.user)
        }

        return data
    },
    // async logout(form) {
    //     setCookie({name: 'token', time: -1})
    //     user.set(null)
    //     token.set(null)
    // },
    // async me(token) {
    //     user.set(null)
    //     const data = await http({url: `/api/users/me?populate[face][fields][1]=url`, token})
    //     if (data.face) data.face.url = import.meta.env.PUBLIC_VITE_API_SERVER +  data.face.url
    //     return data
    //
    // }
}

export const User = {
    init(data: any, jwt: any) {
        user.set(data)
        token.set(jwt)
    },
    async updateBasket() {
        return await http({url: `/api/users/${user.value.id}`, token: token.value, method: 'PUT', body: {basket: user.value.basket}})
    },
    async updateFavorites() {
        // return await http({url: `/api/users/${user.value.id}`, token: token.value, method: 'PUT', body: {orders: {connect: 23}}})
        return await http({url: `/api/users/${user.value.id}`, token: token.value, method: 'PUT', body: {favorites: user.value.favorites}})
    }

}