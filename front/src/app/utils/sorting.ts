import type {Social} from "@app/utils/interfaces";

type Item = {
    [key: string]: any;
};

export function sortByKey<T extends Item>(array: T[], key: keyof T): T[] {
    return array.sort((a, b) => {
        if (a[key] < b[key]) {
            return -1;
        }
        if (a[key] > b[key]) {
            return 1;
        }
        return 0;
    });
}

export function sortByLink(array: Social[]): Social[] {
    return array.sort((a, b) => {
        // Проверяем, есть ли link в каждом объекте
        const aHasLink = a.link !== undefined;
        const bHasLink = b.link !== undefined;

        // Если a имеет link, а b не имеет, a должен быть перед b
        if (aHasLink && !bHasLink) {
            return -1;
        }
        // Если b имеет link, а a не имеет, b должен быть перед a
        if (!aHasLink && bHasLink) {
            return 1;
        }
        // Если оба имеют link или оба их не имеют, порядок не меняется
        return 0;
    });
}