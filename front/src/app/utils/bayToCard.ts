export const bayToCard = (event: Event): void => {
    const div = document.createElement('div')
    div.classList.add('bay-card')
    div.style.left = event.clientX + 'px'
    div.style.top = event.clientY + 'px'
    document.body.insertAdjacentElement('afterbegin', div)
    const baskets = [...document.querySelectorAll('[data-basket]')]
    const basket = baskets.find(item => item.clientHeight)

    setTimeout(() => {
        const {left, top, width, height} = basket.getBoundingClientRect()
        div.style.left = left + width/2 + 'px'
        div.style.top = top + height/2 + 'px'
        div.style.transform = 'translate(-50%, -50%) scale(0)'
    }, 0)

    div.ontransitionend = () => div?.remove()
}