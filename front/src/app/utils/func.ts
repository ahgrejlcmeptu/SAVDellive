export const thumbnail = (str: string): string => {
    // thumbnail small medium
    return str.replace('/uploads/', '/uploads/thumbnail' + '_')
}

export function getCookie(name: string): string | undefined {
    let matches = document.cookie.match(new RegExp(
        '(?:^|; )' + name.replace(/([.$?*|{}()[]\\\/\+^])/g, '\\$1') + '=([^;]*)'
    ))
    return matches ? decodeURIComponent(matches[1]) : undefined
}

export function setCookie({name, value, time}) {
    let date = new Date()
    date.setDate(date.getDate() + (+time || 1))
    document.cookie = `${name}=${value || true}; path=/; expires=${date.toUTCString()}`
}

export function formEmptyValue(data: object) {
    const newDate = data
    for (let key in newDate) {
        if (newDate[key] === undefined) delete newDate[key]
    }
    return newDate
}

export function checkPassword(password: string): boolean {
    const isUpperCase = /[A-Z]/.test(password);
    const isLowerCase = /[a-z]/.test(password);
    const isNumber = /\d/.test(password);
    const isSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const isCyrillic = /[А-Яа-яЁё]/.test(password);

    return isUpperCase && isLowerCase && isNumber && !isSymbol && !isCyrillic; // Все условия должны выполниться
}