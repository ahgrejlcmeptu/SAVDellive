import {atom, map, computed} from 'nanostores';
// import {setCookie} from "../utils/cookie";
// import {http} from "../utils/http";
// import {updateMe, user} from "./user";

export const basketItems = map({});
export const basketLength = computed(basketItems, basketItems => Object.values(basketItems).reduce((val, item) => val + item.amount, 0) || 0);
export const basketTotal = computed(basketItems, basketItems => Object.values(basketItems).reduce((val, item) => val + (item.amount * item.price), 0) || 0)
export const basketDiscount = atom(0)
const basket = () =>  Object.values(basketItems.value).reduce((val, i) => {
    val[i.id] = i.amount
    return val
}, {})

export async function basketInit(basket) {
    basketItems.set({})
    basket.forEach(item => basketItems.setKey(item.id, item))
}
export async function basketLoad(basket) {
    basketItems.set({})
    const json = basket ? JSON.parse(basket) : {}
    if (!Object.keys(json).length) return ''
    const products = await http({url: `/api/products?get=${Object.keys(json)}`})
    await products.forEach(item => basketItems.setKey(item.id, {...item, quantity: json[item.id]}))

    return basketItems.value
}
export async function basketAdd(item) {
    const existingEntry = basketItems.get()[item.id];
    if (existingEntry) {
        basketItems.setKey(item.id, {
            ...existingEntry,
            quantity: existingEntry.quantity + 1
        });
    } else {
        basketItems.setKey(item.id, {
            ...item,
            info: item.info,
            quantity: 1
        });
    }

    if (user.value) {
        user.value.basket = JSON.stringify(basket())
        await updateMe('basket')
    } else {
        basketSave()
    }
}

export async function basketDecrement(id) {
    const existingEntry = basketItems.get()[id];
    if (existingEntry.quantity === 1) return

    basketItems.setKey(id, {
        ...existingEntry,
        quantity: existingEntry.quantity - 1,
    });

    if (user.value) {
        user.value.basket = JSON.stringify(basket())
        await updateMe('basket')
    } else {
        basketSave()
    }
}

export async function basketRemove(id) {
    basketItems.setKey(id, undefined);
    if (user.value) {
        user.value.basket = JSON.stringify(basket())
        await updateMe('basket')
    } else {
        basketSave()
    }
}

export async function basketClear() {
    basketItems.set({})
    if (user.value) {
        user.value.basket = JSON.stringify(basket())
        await updateMe('basket')
    } else {
        setCookie({name: 'basket', value: false, time: -1})
    }
}

const basketSave = () => {
    setCookie({name: 'basket', value: JSON.stringify(basket()), time: 30})
}