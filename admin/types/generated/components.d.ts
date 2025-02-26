import type { Schema, Struct } from '@strapi/strapi';

export interface BlockAbout extends Struct.ComponentSchema {
  collectionName: 'components_block_abouts';
  info: {
    description: '';
    displayName: 'about';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    img: Schema.Attribute.Media<'images'>;
    index: Schema.Attribute.Integer;
    title: Schema.Attribute.String;
    visible: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
  };
}

export interface BlockAdvantages extends Struct.ComponentSchema {
  collectionName: 'components_block_advantages';
  info: {
    description: '';
    displayName: 'advantages';
  };
  attributes: {
    index: Schema.Attribute.Integer;
    list: Schema.Attribute.Relation<'oneToMany', 'api::advantage.advantage'>;
    visible: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
  };
}

export interface BlockBanners extends Struct.ComponentSchema {
  collectionName: 'components_block_banners';
  info: {
    displayName: 'Banners';
  };
  attributes: {
    index: Schema.Attribute.Integer;
    visible: Schema.Attribute.Boolean;
  };
}

export interface BlockCategories extends Struct.ComponentSchema {
  collectionName: 'components_block_categories';
  info: {
    description: '';
    displayName: 'categories';
  };
  attributes: {
    index: Schema.Attribute.Integer;
    lastCard: Schema.Attribute.Boolean;
    lastCardLink: Schema.Attribute.String;
    lastCardText: Schema.Attribute.String;
    list: Schema.Attribute.Relation<'oneToMany', 'api::category.category'>;
    visible: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
  };
}

export interface BlockNews extends Struct.ComponentSchema {
  collectionName: 'components_block_news';
  info: {
    displayName: 'news';
  };
  attributes: {
    index: Schema.Attribute.Integer;
    title: Schema.Attribute.String;
    visible: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
  };
}

export interface BlockPopular extends Struct.ComponentSchema {
  collectionName: 'components_block_populars';
  info: {
    description: '';
    displayName: 'Popular';
  };
  attributes: {
    index: Schema.Attribute.Integer;
    linkBottom: Schema.Attribute.Boolean;
    linkBottomHref: Schema.Attribute.String;
    linkBottomText: Schema.Attribute.String;
    statuses: Schema.Attribute.Relation<'oneToMany', 'api::status.status'>;
    title: Schema.Attribute.String;
    visible: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
  };
}

export interface BlockReviews extends Struct.ComponentSchema {
  collectionName: 'components_block_reviews';
  info: {
    displayName: 'reviews';
  };
  attributes: {
    index: Schema.Attribute.Integer;
    link: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    linkHref: Schema.Attribute.String;
    linkText: Schema.Attribute.String;
    title: Schema.Attribute.String;
    visible: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
  };
}

export interface BlockSeo extends Struct.ComponentSchema {
  collectionName: 'components_block_seos';
  info: {
    displayName: 'seo';
  };
  attributes: {
    index: Schema.Attribute.Integer;
    list: Schema.Attribute.Relation<'oneToMany', 'api::seo.seo'>;
    visible: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
  };
}

export interface BlockSocial extends Struct.ComponentSchema {
  collectionName: 'components_block_socials';
  info: {
    description: '';
    displayName: 'Social';
  };
  attributes: {
    images: Schema.Attribute.Media<'images' | 'files', true>;
    index: Schema.Attribute.Integer;
    link: Schema.Attribute.String;
    linkImg: Schema.Attribute.Media<'images' | 'files'>;
    title: Schema.Attribute.String;
    visible: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
  };
}

export interface BlockStories extends Struct.ComponentSchema {
  collectionName: 'components_block_stories';
  info: {
    description: '';
    displayName: 'stories';
  };
  attributes: {
    index: Schema.Attribute.Integer;
    title: Schema.Attribute.String;
    visible: Schema.Attribute.Boolean;
  };
}

export interface BlockTeam extends Struct.ComponentSchema {
  collectionName: 'components_block_teams';
  info: {
    displayName: 'team';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    images: Schema.Attribute.Media<'images' | 'files', true>;
    index: Schema.Attribute.Integer;
    title: Schema.Attribute.String;
    visible: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
  };
}

export interface ComponentArticleCard extends Struct.ComponentSchema {
  collectionName: 'components_component_article_cards';
  info: {
    displayName: 'Article-Card';
  };
  attributes: {
    img: Schema.Attribute.Media<'images' | 'files'>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ComponentAsk extends Struct.ComponentSchema {
  collectionName: 'components_component_asks';
  info: {
    description: '';
    displayName: 'ask';
  };
  attributes: {
    date: Schema.Attribute.Date;
    description: Schema.Attribute.Blocks;
    img: Schema.Attribute.Media<'images' | 'files'>;
    name: Schema.Attribute.String;
  };
}

export interface ComponentReview extends Struct.ComponentSchema {
  collectionName: 'components_component_reviews';
  info: {
    description: '';
    displayName: 'review';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    img: Schema.Attribute.Media<'images' | 'files'>;
    name: Schema.Attribute.String;
    video: Schema.Attribute.Media<'files' | 'videos'>;
  };
}

export interface UiGallery extends Struct.ComponentSchema {
  collectionName: 'components_ui_galleries';
  info: {
    description: '';
    displayName: 'gallery';
  };
  attributes: {
    gallery: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
    linkVideo: Schema.Attribute.String;
    poster: Schema.Attribute.Media<'images' | 'files'>;
  };
}

export interface UiShortText extends Struct.ComponentSchema {
  collectionName: 'components_ui_short_texts';
  info: {
    description: '';
    displayName: 'short-text';
  };
  attributes: {
    text: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'block.about': BlockAbout;
      'block.advantages': BlockAdvantages;
      'block.banners': BlockBanners;
      'block.categories': BlockCategories;
      'block.news': BlockNews;
      'block.popular': BlockPopular;
      'block.reviews': BlockReviews;
      'block.seo': BlockSeo;
      'block.social': BlockSocial;
      'block.stories': BlockStories;
      'block.team': BlockTeam;
      'component.article-card': ComponentArticleCard;
      'component.ask': ComponentAsk;
      'component.review': ComponentReview;
      'ui.gallery': UiGallery;
      'ui.short-text': UiShortText;
    }
  }
}
