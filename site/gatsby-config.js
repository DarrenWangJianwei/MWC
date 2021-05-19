module.exports = {
  flags: {
    DEV_SSR: false
  },
  plugins: [
    {
      resolve: '@elegantstack/gatsby-theme-flexiblocks',
      options: {
        createDemoPages: true,
        colorMode: true
      }
    }
  ],
  // Customize your site metadata
  siteMetadata: {
    title: 'Mountwater Capital',
    name: 'MountwaterCapital',
    description: 'My site description...'
  }
}
