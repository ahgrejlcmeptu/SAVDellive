export const closeTheWindow = (name: string, el: HTMLElement, func: () => void): void => {
    document.addEventListener('click', (event: MouseEvent): void => {
        if (event.target.closest(`.${name}`) !== el) func()
    })
}