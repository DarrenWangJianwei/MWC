module.exports = {
  flags: {
    DEV_SSR: false
  },
  plugins: [
    {
      resolve: '@elegantstack/gatsby-theme-flexiblocks',
      options: {
        createDemoPages: false,
        colorMode: false
      }
    },
    {
      // ATTENTION: Match the theme name with the theme you installed
      resolve: 'react-image-gallery',
    },
    {
      resolve: 'axios',
    }
  ],
  // Customize your site metadata
  siteMetadata: {
    title: 'Mountwater Capital',
    name: 'MountwaterCapital',
    description: 'My site description...'
  }
}
