import {renderBlock} from "blocks-html-renderer";
import {Products} from "./populates";

export const renderBlockBr = (block: any) => renderBlock(block).replace(/\n/g, ' <br>')
export const renderBlockIcon = (block: any) => renderBlock(block).replace(/<\/?p>/g, '')
export const blockBanners = async () => {
    return await strapi.documents('api::banner.banner').findMany({
        fields: [],
        populate: {
            img: {
                fields: ['url']
            },
            mobile: {
                fields: ['url']
            }
        },
        sort: ['index:desc'],
        status: 'published'
    })
}
export const blockCatalog = async () => {
    const categories = await strapi.documents('api::category.category').findMany({
        fields: ['name'],
        populate: {
            products: Products.base
        },
        sort: ['index:desc'],
        status: 'published'
    })
    return categories.filter(i => i.products.length)
}
export const blockStories = async () => {
    return await strapi.documents('api::story.story').findMany({
        fields: ['name', 'href'],
        populate: {
            img: {
                fields: ['url']
            },
            gallery: {
                fields: ['url']
            }
        },
        sort: ['index:desc'],
        status: 'published'
    })
}
export const blockNewsCard = async () => {
    return await strapi.documents('api::article.article').findMany({
        fields: [],
        populate: {
            card: {
                populate: {
                    img: {
                        fields: ['url']
                    }
                }
            }
        },
        sort: ['index:desc'],
        status: 'published'
    })
}
export const blockReviewsReview = async (ask: boolean) => {
    const populate: any = {
        review: {
            populate: {
                img: {
                    fields: ['url']
                },
                video: {
                    fields: ['url']
                }
            }
        }
    }
    if (ask) {
        populate.ask = {
            populate: {
                img: {
                    fields: ['url']
                }
            }
        }
    }
    return await strapi.documents('api::review.review').findMany({
        fields: ['createdAt'],
        populate,
        sort: ['createdAt:desc'],
        status: 'published'
    })
}
export const contactsRequisite = async () => {
    const result: any = await strapi.documents('api::contact.contact').findFirst({
        fields: ['requisite']
    });
    return renderBlockBr(result.requisite)
}
export const blockPopular = (block: any) => {
    let statuses = block.statuses.filter((i:any) => i.products.length)
    const cards: any = {}
    statuses = statuses.map(({name, icon, products, documentId}: any) => {
        const randomCards = products
            .sort(() => Math.random() - 0.5)
            .slice(0, 8);

        randomCards.forEach((i:any) => cards[i.documentId] = i)
        return {documentId, name, icon: renderBlockIcon(icon)}
    })
    return {...block, statuses, products: Object.values(cards)}
}
export const blockFavorites = async (arr: any) => {
    return await strapi.documents('api::product.product').findMany({
        ...Products.base,
        filters: {
            documentId: {
                $eq: arr
            }
        }
    });
}