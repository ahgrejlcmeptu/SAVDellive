export const localeDate = (date: number): string => {
    const event = new Date(date);
    const options: Intl.DateTimeFormatOptions = {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        // hour: "numeric",
        // minute: "numeric",
        // second: "numeric",
    };

    return event.toLocaleString("ru-RU", options)
}

export const localeNumber = (value: number): string => {
    return value.toLocaleString("ru-RU")
}