/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'RMAPI',
        fieldName: 'rickandMorty',
        url:'http://localhost:4000'
      }
    }
  ],
}
