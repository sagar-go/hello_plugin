'use strict';

module.exports = {
  index(ctx) {
    ctx.body = strapi
      .plugin('hello-world')
      .service('myService')
      .getWelcomeMessage();
  },
};
