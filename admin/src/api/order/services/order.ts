import { factories } from '@strapi/strapi';
import {USER} from "../../../utils/user";

export default factories.createCoreService('api::order.order', ({strapi}) => ({
    async create(params) {
        const ctx = strapi.requestContext.get();
        const authHeader = ctx.request.headers['authorization'];
        const result = await super.create(params);

        if (authHeader) {
            const token = authHeader.split(' ')[1];
            await USER.update({orders: {connect: result.id}}, token)
        }

        return result;
    }
}));