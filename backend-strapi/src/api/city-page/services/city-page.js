'use strict';

/**
 * city-page service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::city-page.city-page');
