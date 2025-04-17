import type { Schema, Struct } from '@strapi/strapi';

export interface AffiliationMarketplaceLinks extends Struct.ComponentSchema {
  collectionName: 'components_affiliation_marketplace_links';
  info: {
    displayName: 'marketplaceLinks';
  };
  attributes: {
    affiliateLink: Schema.Attribute.String;
    discountPercentage: Schema.Attribute.Integer;
    marketplaceName: Schema.Attribute.String;
    price: Schema.Attribute.Decimal;
    promoCode: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'affiliation.marketplace-links': AffiliationMarketplaceLinks;
    }
  }
}
