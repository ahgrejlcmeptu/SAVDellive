import {atom, map, computed} from 'nanostores';
import {setCookie} from "@app/utils/func.ts";
import {favoritesList} from "@app/store/favorites.ts";
// import {http} from "../utils/http";
// import {updateMe, user} from "./user";

export const basketItems = map({});
export const basketLength = computed(basketItems, basketItems => Object.values(basketItems).reduce((val, item) => val + item.amount, 0) || 0);
export const basketTotal = computed(basketItems, basketItems => Object.values(basketItems).reduce((val, item) => val + (item.amount * item.price), 0) || 0)
export const basketDiscount = atom(0)

export async function basketInit(basket) {
    basketItems.set({})
    basket.forEach(item => basketItems.setKey(item.documentId, item))
}

export async function basketAdd(item) {
    const existingEntry = basketItems.get()[item.documentId];
    if (existingEntry) {
        basketItems.setKey(item.documentId, {
            ...existingEntry,
            amount: existingEntry.amount + 1
        });
    } else {
        basketItems.setKey(item.documentId, {
            ...item,
            amount: 1
        });
    }

    basketSave()
    // if (user.value) {
    //     user.value.basket = JSON.stringify(basket())
    //     await updateMe('basket')
    // } else {
    //     basketSave()
    // }
}

export async function basketIncrement(documentId) {
    const existingEntry = basketItems.get()[documentId];
    basketItems.setKey(documentId, {
        ...existingEntry,
        amount: existingEntry.amount + 1,
    });
    basketSave()
    // if (user.value) {
    //     user.value.basket = JSON.stringify(basket())
    //     await updateMe('basket')
    // } else {
    //     basketSave()
    // }
}

export async function basketDecrement(documentId) {
    const existingEntry = basketItems.get()[documentId];
    if (existingEntry.amount === 1) return

    basketItems.setKey(documentId, {
        ...existingEntry,
        amount: existingEntry.amount - 1,
    });
    basketSave()
    // if (user.value) {
    //     user.value.basket = JSON.stringify(basket())
    //     await updateMe('basket')
    // } else {
    //     basketSave()
    // }
}

export async function basketRemove(documentId) {
    basketItems.setKey(documentId, undefined);
    basketSave()
    // if (user.value) {
    //     user.value.basket = JSON.stringify(basket())
    //     await updateMe('basket')
    // } else {
    //     basketSave()
    // }
}

export async function basketClear() {
    basketItems.set({})
    setCookie({name: 'basket', value: false, time: -1})
    // if (user.value) {
    //     user.value.basket = JSON.stringify(basket())
    //     await updateMe('basket')
    // } else {
    //     setCookie({name: 'basket', value: false, time: -1})
    // }
}

const basketTransformCookie = () => Object.values(basketItems.value).reduce((val, i) => {
    val[i.documentId] = i.amount
    return val
}, {})
const basketSave = () => {
    setCookie({name: 'basket', value: JSON.stringify(basketTransformCookie()), time: 30})
}