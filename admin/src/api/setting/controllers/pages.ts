import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::setting.setting', ({strapi}) => ({
    async findPage(ctx) {
        return await strapi.service('api::setting.setting').findPage(ctx)
    },
}));
