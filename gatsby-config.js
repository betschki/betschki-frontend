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
    "gatsby-plugin-styled-components",
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
    {
      resolve: "gatsby-plugin-plausible",
      options: {
        domain: process.env.PUBLIC_URL,
      },
    },
    {
      resolve: "gatsby-plugin-pdf",
      options: {
        paths: ["/cv/"],
        outputPath: "/public/pdf",
        allPages: false,
        pdfOptions: {
          margin: {
            top: "1.9cm",
            bottom: "3.67cm",
            left: "1.9cm",
            right: "1.32cm",
          },
        },
      },
    },
  ],
};
