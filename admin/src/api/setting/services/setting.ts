import {factories} from '@strapi/strapi';
import * as cookie from 'cookie';
import {pageName} from "../../../pages/pagesHome";
import {blockProducts} from "../../../admin/app.block";

export default factories.createCoreService('api::setting.setting', ({strapi}) => ({
    async find(params) {
        const ctx = strapi.requestContext.get();
        const cookies = JSON.parse(ctx.request.header.cookie)
        let basket = []

        if (cookies.basket) {
            const list = JSON.parse(cookies.basket) || {}
            if (Object.keys(list).length) {
                basket = await blockProducts(Object.keys(list)) || []
                basket = basket.map(i => {
                    return {...i, amount: list[i.documentId]}
                })
            }
        }

        const document = await super.find(params);
        const branches = await strapi.documents('api::branch.branch').findMany({
            fields: ["city", "street", "phone", "email"],
            populate: {
                mode: true,
                waiting: true,
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

        return {
            ...document, branches, presents, nav: {
                categories: categories.filter(i => i.products.length)
            }, basket
        };
    },
    async findPage(ctx) {
        const cookies = cookie.parse(ctx.request.header.cookie || '')
        // cookies = cookies.split('; ').map(i => i.split())
        return await pageName(ctx.params.id, cookies)
    },
}));
