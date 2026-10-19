module.exports = {
  siteMetadata: {
    siteUrl: `https://warewulf.org`,
    title: `Warewulf`,
    description: `Stateless, image-based provisioning and management for bare metal and virtual HPC clusters, from a handful of nodes to tens of thousands.`,
  },
  trailingSlash: `always`,
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: { name: `posts`, path: `${__dirname}/src/posts` },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: { name: `static-pages`, path: `${__dirname}/src/static-pages` },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Warewulf`,
        short_name: `Warewulf`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#1b6b25`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
    `gatsby-plugin-postcss`,
    {
      resolve: `@devular/gatsby-plugin-plausible`,
      options: {
        domain: `warewulf.org`,
        proxyScript: `https://img.resf.workers.dev/js/script.outbound-links.js`,
        proxyApi: `https://img.resf.workers.dev/img/event`,
      },
    },
  ],
}
