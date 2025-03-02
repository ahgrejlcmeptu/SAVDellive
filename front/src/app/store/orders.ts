// /api/orders
import {http} from '../utils/http';
import {basketClear, basketItems} from './basket';
// import {token, user} from "./user";

export const orderCreate = async (data: object) => {
    const body = {
        products: JSON.stringify(Object.values(basketItems.value)),
        ...data
    }
    // if (user.value) body.user = user.value.id

    // const order = await http({url: `/api/orders`, method: "POST", body, token})
    const result = await http({url: `/api/orders`, method: "POST", body})
    if (result.error) return false
    await basketClear()
    return result.data
}
export const orderSuccessfully = async (id: string | null) => {
    const result = await http({url: `/api/orders/${id}?fields=products,state`})
    if (result.error) return false

    return result.data
}

// export const orderLength = (list) => {
//     return list.reduce((val, item) => val + item.quantity, 0)
// }
// export const orderTotal = (list) => {
//     return list.reduce((val, item) => val + (item.quantity * item.price), 0)
// }