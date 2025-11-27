import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksData extends Struct.ComponentSchema {
  collectionName: 'components_blocks_data_s';
  info: {
    displayName: 'data ';
  };
  attributes: {};
}

export interface BlocksHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_hero_sections';
  info: {
    displayName: 'Hero Section';
  };
  attributes: {
    cta: Schema.Attribute.Component<'elements.link', false>;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    logo: Schema.Attribute.Component<'elements.logo', false>;
    theme: Schema.Attribute.Enumeration<['turquorise', 'orange']>;
  };
}

export interface BlocksInfoBlock extends Struct.ComponentSchema {
  collectionName: 'components_blocks_info_blocks';
  info: {
    displayName: 'info block';
  };
  attributes: {
    content: Schema.Attribute.RichText;
    cta: Schema.Attribute.Component<'elements.link', false>;
    headline: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    reverse: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    theme: Schema.Attribute.Enumeration<['Turquoise  ', 'orange']>;
  };
}

export interface ComponentsAbout extends Struct.ComponentSchema {
  collectionName: 'components_components_abouts';
  info: {
    displayName: 'about';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    image: Schema.Attribute.Media<'images'>;
    richtext: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
    title1: Schema.Attribute.String;
  };
}

export interface ComponentsContactUs extends Struct.ComponentSchema {
  collectionName: 'components_components_contact_uses';
  info: {
    displayName: 'Contact_Us';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsFaq extends Struct.ComponentSchema {
  collectionName: 'components_components_faqs';
  info: {
    displayName: 'Faq';
  };
  attributes: {
    Faq_Data: Schema.Attribute.Component<'components.faq-data', true>;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsFaqData extends Struct.ComponentSchema {
  collectionName: 'components_components_faq_data';
  info: {
    displayName: 'Faq_Data';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsSeoTags extends Struct.ComponentSchema {
  collectionName: 'components_components_seo_tags';
  info: {
    displayName: 'SeoTags';
  };
  attributes: {
    cannonicalUrl: Schema.Attribute.String;
    Description: Schema.Attribute.Text;
    state: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsService extends Struct.ComponentSchema {
  collectionName: 'components_components_services';
  info: {
    displayName: 'Service';
  };
  attributes: {
    altTags: Schema.Attribute.Text;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    ImageTitlte: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsServiceCard extends Struct.ComponentSchema {
  collectionName: 'components_components_service_cards';
  info: {
    displayName: 'serviceCard';
  };
  attributes: {
    altstext: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsServicesGrid extends Struct.ComponentSchema {
  collectionName: 'components_components_services_grids';
  info: {
    displayName: 'ServicesGrid';
  };
  attributes: {
    heading: Schema.Attribute.String;
    ServiceCard: Schema.Attribute.Component<'components.service-card', true>;
    subheading: Schema.Attribute.Blocks;
  };
}

export interface ComponentsSideSection extends Struct.ComponentSchema {
  collectionName: 'components_components_side_sections';
  info: {
    displayName: 'Side_Section';
  };
  attributes: {
    altTags: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images', true>;
    title: Schema.Attribute.String;
  };
}

export interface ElementsLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    href: Schema.Attribute.String;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    text: Schema.Attribute.String;
  };
}

export interface ElementsLogo extends Struct.ComponentSchema {
  collectionName: 'components_elements_logo_s';
  info: {
    displayName: 'Logo ';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    LogoText: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.data': BlocksData;
      'blocks.hero-section': BlocksHeroSection;
      'blocks.info-block': BlocksInfoBlock;
      'components.about': ComponentsAbout;
      'components.contact-us': ComponentsContactUs;
      'components.faq': ComponentsFaq;
      'components.faq-data': ComponentsFaqData;
      'components.seo-tags': ComponentsSeoTags;
      'components.service': ComponentsService;
      'components.service-card': ComponentsServiceCard;
      'components.services-grid': ComponentsServicesGrid;
      'components.side-section': ComponentsSideSection;
      'elements.link': ElementsLink;
      'elements.logo': ElementsLogo;
    }
  }
}
