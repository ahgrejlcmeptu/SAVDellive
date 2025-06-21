import jwt, {JwtPayload} from 'jsonwebtoken';

const JWT_SECRET = strapi.config.get('plugin.users-permissions.jwtSecret', 'your_jwt_secret');

interface AuthenticatedUser extends JwtPayload {
    id: number | string;
}

export const USER = {
    async find(token: string): Promise<AuthenticatedUser | null> {
        const decodedToken = jwt.verify(token, JWT_SECRET) as AuthenticatedUser;
        let user = strapi.entityService.findOne('plugin::users-permissions.user', decodedToken.id)
        if (!user) {
            return null;
        }
        return user;
    },
    async update(data: any, token: string) {
        const decodedToken = jwt.verify(token, JWT_SECRET) as AuthenticatedUser;

        let user = await strapi.entityService.update('plugin::users-permissions.user', decodedToken.id, {data})
        if (!user) {
            return null;
        }
        return user;
    }
}