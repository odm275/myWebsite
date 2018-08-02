module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: '5zzu1s37v6hu',
        accessToken:
          'ad783b5e48b9f84a0f75b913c285e9c590574dbeed7c34b31093417653d05168',
      },
    },
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-glamor`,
    `gatsby-transformer-remark`,
  ],
}
