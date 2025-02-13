import {map} from 'nanostores';

interface MapType {
    setKey(key: string, value: any): void;
}

export const popupActive: MapType = map({})
export const popupOpen = (name: string): void => {
    popupActive.setKey(name, name)
}
export const popupClose = (name: string): void => {
    popupActive.setKey(name, undefined)
}