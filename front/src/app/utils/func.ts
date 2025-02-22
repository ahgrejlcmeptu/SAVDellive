export const thumbnail = (str: string): string => {
    // thumbnail small medium
    return str.replace('/uploads/', '/uploads/thumbnail' + '_')
}