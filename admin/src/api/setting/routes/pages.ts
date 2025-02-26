export default {
    routes: [
        { // Path defined with a URL parameter
            method: 'GET',
            path: '/pages/:id',
            handler: 'pages.findPage',
        }
    ]
}