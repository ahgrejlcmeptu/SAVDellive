import {factories} from '@strapi/strapi';
import {pageName} from "../../../pages/pagesHome";
import {blockProducts} from "../../../admin/app.block";
import {USER} from "../../../utils/user";

export default factories.createCoreService('api::setting.setting', ({strapi}) => ({
    async find(params) {
        const ctx = strapi.requestContext.get();
        const cookies = JSON.parse(ctx.request.header.cookie)
        const authHeader = ctx.request.headers['authorization'];
        let basket = []

        let user = null;

        if (authHeader) {
            const token = authHeader.split(' ')[1];
            user = await USER.find(token);
            if (user.basket && Object.keys(user.basket).length) {
                basket = await blockProducts(Object.keys(user.basket)) || []
                basket = basket.map(i => {
                    return {...i, amount: user.basket[i.documentId]}
                })
            }
        }

        if (cookies.basket && !user) {
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
            }, basket, user
        };
    },
    async findPage(ctx) {
        return await pageName(ctx.params.id)
    },
}));
