// /api/orders
import {http} from '../utils/http';
import {basketClear, basketItems} from './basket';
import {user, token} from "./user";

export const orderCreate = async (data: object) => {
    const body = {
        products: Object.values(basketItems.value),
        ...data
    }

    console.log(body)
    // return false
    // const order = await http({url: `/api/orders`, method: "POST", body, token})
    const result = await http({url: `/api/orders`, token: token.value, method: "POST", body: {data: body}})
    if (result.error) return false
    await basketClear()
    return result.data
}
export const orderSuccessfully = async (id: string | null) => {
    const result = await http({url: `/api/orders/${id}?fields=products,state`})
    if (result.error) return false

    return result.data
}