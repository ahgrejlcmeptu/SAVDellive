export class Anchors {
    constructor(list = []) {
        this.url = null
        this.list = list
        this.top = 0
    }
    click(e: Event) {
        const link = e.target.closest('a[href]')
        if (link) {
            if (!link.getAttribute('href')) return;

            this.url = new URL(link.href)
            if (!this.url.hash) return;
            if (location.pathname !== this.url.pathname) return;
            e.preventDefault()

            this.update(this.url.hash)
        }
    }

    update(hash) {
        if (!hash) return;

        let item = document.querySelector(hash)
        if (!item) return;
        const header = document.querySelector('header')

        let top = header ? header.clientHeight : 0
        this.list.forEach(i => {
            const el = document.querySelector(`.${i}`)
            if (el) top += el.clientHeight
        })

        this.top = item.getBoundingClientRect().y + pageYOffset - top;
        this.scroll()
    }
    scroll() {
        window.scrollTo({
            top: this.top,
            behavior: "smooth"
        })
    }
}