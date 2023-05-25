"use strict";

/**
 * A set of functions called "actions" for `posts-report`
 */

const { entityService } = require("@strapi/strapi").factories;

module.exports = {
  async postsReport(ctx, next) {
    // console.log(ctx.request);
    if (ctx.request.method === "GET") {
      try {
        const data = await strapi.entityService.findMany(
          "api::product.product",
          {
            fields: ["id", "Title"],
          }
        );
        // const data = await strapi
        //   .service("api::posts-report.posts-report")
        //   .postsReport();
        // console.log(data, "data");
        // ctx.body = "Husnain Here";
        return data;
        // ctx.body = data;
      } catch (err) {
        // ctx.badRequest("Post report controller error", { moreDetails: err });
        ctx.body = err;
      }
    } else if (ctx.request.method === "POST") {
      try {
        const data = await strapi.entityService.create("api::product.product", {
          data: {
            id: ctx.request.body.data.id,
            Title: ctx.request.body.data.Title,
          },
        });
        // const data = await strapi
        //   .service("api::posts-report.posts-report")
        //   .postsReport();
        // console.log(data, "data");
        // ctx.body = "Husnain Here";
        return data;
        // ctx.body = data;
      } catch (err) {
        // ctx.badRequest("Post report controller error", { moreDetails: err });
        ctx.body = err;
      }
    } else if (ctx.request.method === "PUT") {
      try {
        const data = await strapi.entityService.update(
          "api::product.product",
          ctx.request.params.id,
          {
            data: {
              id: ctx.request.body.data.id,
              Title: ctx.request.body.data.Title,
            },
          }
        );
        return data;
      } catch (err) {
        ctx.body = err;
      }
    } else if (ctx.request.method === "DELETE") {
      try {
        console.log(ctx.request.params);
        const data = await strapi.entityService.delete(
          "api::product.product",
          ctx.request.params.id
        );
        return data;
      } catch (err) {
        console.log(err);
        ctx.body = err;
      }
    }
  },
};
