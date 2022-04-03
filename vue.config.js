module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/need-for-drive/' : '/',
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
