export default ({ env }) => ({
    // ...
    'users-permissions': {
        config: {
            jwt: {
                expiresIn: '7d',
            },
        },
    },
    // ...
});