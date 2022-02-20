require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: `betschki.com`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-styled-components",
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
          height: "29.7cm",
          width: "21cm",
          pageRanges: "1",
        },
      },
    },
    {
      resolve: "gatsby-source-custom-api",
      options: {
        url: "https://api.betschki.com/education",
        rootKey: "education",
        schemas: {
          education: `
            id: Int
            school: String
            degree: String
            description: String
            startDate: String
            endDate: String
            tags: [String]
          `,
        },
      },
    },
    {
      resolve: "gatsby-source-custom-api",
      options: {
        url: "https://api.betschki.com/employment",
        rootKey: "employment",
        schemas: {
          employment: `
            id: Int
            company: String
            position: String
            description: String
            startDate: String
            endDate: String
            tags: [String]
          `,
        },
      },
    },
    {
      resolve: "gatsby-source-custom-api",
      options: {
        url: "https://api.betschki.com/contact",
        rootKey: "contact",
        schemas: {
          contact: `
            firstname: String
            surname: String
            city: String
            country: String
            email: String
          `,
        },
      },
    },
    {
      resolve: "gatsby-source-custom-api",
      options: {
        url: "https://api.betschki.com/content",
        rootKey: "content",
        schemas: {
          content: `
            heading: String
            subheading: String
            content: String
          `,
        },
      },
    },
  ],
};
