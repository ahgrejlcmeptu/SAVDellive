const body = document.querySelector('body');

export function bodyLock() {
    const lockPadding = document.querySelectorAll('.lock-padding');
    const lockPaddingValue = window.innerWidth - body.offsetWidth + 'px';
    for (let index = 0; index < lockPadding.length; index++) {
        const el = lockPadding[index];
        el.style.paddingRight = lockPaddingValue;
    }
    body.style.overflow = 'hidden'
}

export function bodyUnLock() {
    const lockPadding = document.querySelectorAll('.lock-padding');
    if (lockPadding.length > 0) {
        for (let index = 0; index < lockPadding.length; index++) {
            const el = lockPadding[index];
            el.style.paddingRight = null
        }
    }
    body.style.overflow = null
}