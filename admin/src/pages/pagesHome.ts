import {
    blockBanners,
    blockNewsCard,
    blockReviewsReview,
    blockStories,
    contactsRequisite,
    renderBlockBr,
    blockPopular, blockCatalog, blockFavorites
} from "../admin/app.block";
import {
    About,
    Advantages,
    Banners,
    Categories,
    Gallery,
    News,
    Reviews,
    Seo,
    Social,
    Stories,
    Team,
    Popular, Declaration
} from "../admin/populates";

const pages = {
    async home() {
        const block: any = await strapi.documents('api::home.home').findFirst({
            fields: [],
            populate: {
                advantages: Advantages.base,
                banners: Banners.base,
                categories: Categories.base,
                about: About.base,
                seo: Seo.base,
                stories: Stories.base,
                news: News.base,
                reviews: Reviews.base,
                popular: Popular.base
            }
        });

        if (block.banners) block.banners.list = await blockBanners()
        if (block.advantages && block.advantages.list.length) block.advantages.list = Seo.list(block.advantages.list)
        if (block.about && block.about.description) block.about.description = renderBlockBr(block.about.description)
        if (block.seo && block.seo.list.length) block.seo.list = Seo.list(block.seo.list)
        if (block.stories) block.stories.list = await blockStories()
        if (block.news) block.news.list = await blockNewsCard()
        if (block.reviews) {
            block.reviews.list = await blockReviewsReview(false)
            block.reviews.list = Reviews.list(block.reviews.list)
        }
        if (block.popular) block.popular = blockPopular(block.popular)

        return block
    },
    async catalog() {
        const block: any = await strapi.documents('api::catalog.catalog').findFirst({
            fields: ['title'],
            populate: {
                seo: Seo.base,
                declaration: Declaration.base
            }
        });
        block.list = await blockCatalog()
        if (block.seo && block.seo.list.length) block.seo.list = Seo.list(block.seo.list)
        return block
    },
    async successfully() {
        const block: any = await strapi.documents('api::successfully.successfully').findFirst({
            fields: [],
            populate: {
                news: News.base
            }
        });
        if (block.news) block.news.list = await blockNewsCard()

        return block
    },
    async contact() {
        const block: any = await strapi.documents('api::contact.contact').findFirst({
            fields: ['requisite', 'title'],
            populate: {
                seo: Seo.base,
            }
        });
        if (block.seo && block.seo.list.length) block.seo.list = Seo.list(block.seo.list)
        if (block.requisite) block.requisite = renderBlockBr(block.requisite)
        return block
    },
    async delivery() {
        const block: any = await strapi.documents('api::delivery.delivery').findFirst({
            fields: ['title', 'delivery', 'payment'],
            populate: {
                seo: Seo.base,
            }
        });
        if (block.seo && block.seo.list.length) block.seo.list = Seo.list(block.seo.list)
        block.requisite = await contactsRequisite()
        block.delivery = renderBlockBr(block.delivery)
        block.payment = renderBlockBr(block.payment)

        return block
    },
    async about() {
        const block: any = await strapi.documents('api::about.about').findFirst({
            fields: ['title', 'description'],
            populate: {
                team: Team.base,
                reviews: Reviews.base,
                social: Social.base,
                seo: Seo.base,
                gallery: Gallery.base
            }
        });

        if (block.description) block.description = renderBlockBr(block.description)
        if (block.team && block.team.description) block.team.description = renderBlockBr(block.team.description)
        if (block.reviews) {
            block.reviews.list = await blockReviewsReview(false)
            block.reviews.list = Reviews.list(block.reviews.list)
        }
        if (block.seo && block.seo.list.length) block.seo.list = Seo.list(block.seo.list)

        return block
    },
    async review() {
        const block: any = await strapi.documents('api::recall.recall').findFirst({
            fields: ['title'],
            populate: {
                seo: Seo.base,
            }
        });
        if (block.seo && block.seo.list.length) block.seo.list = Seo.list(block.seo.list)
        block.list = await blockReviewsReview(true)
        block.list = Reviews.list(block.list)

        return block
    },
    async news() {
        const block: any = await strapi.documents('api::tiding.tiding').findFirst({
            fields: ['title'],

            populate: {
                seo: Seo.base,
            }
        });
        block.list = await blockNewsCard()
        if (block.seo && block.seo.list.length) block.seo.list = Seo.list(block.seo.list)

        return block
    },
    async order() {
        const block: any = await strapi.documents('api::order.order').findFirst({
            fields: ['title']
        });

        return block
    },
    async favorites(cookies) {
        const favorites = cookies.favorites ? JSON.parse(cookies.favorites): null
        return favorites && favorites.length ? await blockFavorites(favorites) : []
    },

}
export const pageName = async (name, cookies) => {
    return await pages[name](cookies)
}

