const dotenv = require("dotenv");

dotenv.config({ path: ".env" });

module.exports = {
  siteMetadata: {
    title: `Slicks Slices`,
    siteUrl: "https://gatsby.pizza",
    description: "The best pizza place in Hamilton!",
    twitter: "@slicksSlices",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "wmlbcjhb",
        dataset: "production",
        // When you make changes within the sanity cms you wont have to restart the server if you use watchMode
        watchMode: true,
        token: process.env.SANITY_TOKEN,
        apiVersion: "2023-11-01",
      },
    },
  ],
};
