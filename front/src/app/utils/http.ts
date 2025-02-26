type TYPE_HTTP = {
    url: string,
    body?: any,
    token?: string,
    method: string
}

export async function http<TYPE_HTTP>({url, body, token, method = "GET", cookies}) {
    try {
        const config = {
            method,
            headers: {'Content-Type': 'application/json'},
            credentials: 'include'
        }
        if (token) config.headers['Authorization'] = 'Bearer ' + token
        if (body) config.body = JSON.stringify(body)
        if (cookies) config.headers.Cookie = cookies

        const response = await fetch(`${import.meta.env.SERVER_VITE_API_SERVER || import.meta.env.PUBLIC_VITE_API_SERVER}${url}`, config)

        return await response.json()
    } catch (e) {
        console.log(e)
    }
}