import { factories } from '@strapi/strapi';
import * as cookie from 'cookie';
import {pageName} from "../../../pages/pagesHome";

export default factories.createCoreService('api::setting.setting', ({ strapi }) => ({
    async find(params) {
        // some logic here
        const document = await super.find(params);
        const branches = await strapi.documents('api::branch.branch').findMany({
            fields: ["city", "street", "phone", "email"],
            populate: {
                mode: true,
                waiting : true,
                map: {
                    fields: ["url"]
                }
            },
            status: 'published'
        })

        const categories = await strapi.documents('api::category.category').findMany({
            fields: ["name"],
            populate: {
              products: {
                  fields: []
              }
            },
            status: 'published'
        })
        const presents = document.presents ? await strapi.documents('api::present.present').findMany({
            fields: ["name", "price", "compound"],
            populate: {
                img: {
                    fields: ["url"]
                }
            },
            status: 'published'
        }) : []

        return {...document, branches, presents, nav: {
                categories: categories.filter(i => i.products.length)
            }};
    },
    async findPage(ctx) {
        const cookies = cookie.parse(ctx.request.header.cookie || '')
        // cookies = cookies.split('; ').map(i => i.split())
        return await pageName(ctx.params.id, cookies)
    },
}));
