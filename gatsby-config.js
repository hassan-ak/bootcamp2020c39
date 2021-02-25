module.exports = {
  plugins: [
    `gatsby-plugin-material-ui`,
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/app/*`] },
    },
  ],
};
