module.exports = {
  routes: [
    {
      method: "GET",
      path: "/posts-report",
      handler: "posts-report.postsReport",
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "POST",
      path: "/posts-report",
      handler: "posts-report.postsReport",
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "PUT",
      path: "/posts-report/:id",
      handler: "posts-report.postsReport",
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "DELETE",
      path: "/posts-report/:id",
      handler: "posts-report.postsReport",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
