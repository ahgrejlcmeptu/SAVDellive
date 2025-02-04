export const updateLocationSearch = (val: string, name: string) => {
    const currentUrl = new URL(window.location.href);
    const params = new URLSearchParams(currentUrl.search);
    val ? params.set(name, val) : params.delete(name)
    currentUrl.search = params.toString();
    window.history.pushState({path: currentUrl.pathname + currentUrl.search}, '', currentUrl);
}