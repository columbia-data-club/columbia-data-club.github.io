import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Columbia Data Club`,
    siteUrl: `https://columbia-data-club.github.io/`,
    menuLinks: [
      {
        name: 'home',
        link: '/'
      },
      {
        name: `Page 1`,
        link: `/page-1`,
      },
    ]
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-pnpm",
    "gatsby-plugin-postcss",
    "gatsby-plugin-image", "gatsby-plugin-sitemap", "gatsby-plugin-mdx", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    }, {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: "posts",
        path: `${__dirname}/src/posts/`
      },
    }]
};

export default config;
