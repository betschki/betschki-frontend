require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: `betschki.com`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-multi-api",
      options: {
        apis: [
          {
            prefix: "Backend",
            baseUrl: process.env.BACKEND_URL,
            endpoints: ["content", "contact", "education", "employment"],
          },
        ],
      },
    },
  ],
};
