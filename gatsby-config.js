module.exports = {
  siteMetadata: {
    title: `Aware Site`,
  },
  plugins: [
      `gatsby-plugin-react-helmet`, {
          resolve: `gatsby-plugin-google-analytics`,
          options: {
              trackingId: `UA-104390892-1`
          }
      }
  ]
}
