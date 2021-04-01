module.exports = {
  pathPrefix: '/g2plot-theme-builder',
  siteMetadata: {
    title: `👋 G2Plot theme builder`,
    githubUrl: 'https://github.com/visiky/g2plot-theme-builder.git',
    author: 'visiky',
    contact: 'https://github.com/visiky',
  },
  flags: {
    DEV_SSR: true,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-antd',
      options: {
        style: true,
      },
    },
    {
      resolve: 'gatsby-plugin-less',
      options: {
        strictMath: true,
        lessOptions: {
          javascriptEnabled: true,
          modifyVars: {
            'primary-color': '#873bf4',
            'font-family': 'Arial',
          },
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
