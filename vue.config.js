module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/admin-nfd/' : '/',
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/scss/main.scss";
        `,
      },
    },
  },
};
