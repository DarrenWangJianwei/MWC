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
      resolve:'gatsby-source-filesystem',
      options:{
        name:"images",
        path:`${__dirname}/src/images`
      },
    },
    { resolve: 'gatsby-plugin-google-analytics', options: { trackingId: 'UA-98325790-2', }, },
    {
      resolve:`gatsby-plugin-manifest`,
      options:{
        name:'gatsby-starter-default',
        short_name:'starter',
        start_url:'/',
        background_color:`#663399`,
        theme_color:`#663399`,
        display:`minimal-ui`,
        icon:`src/images/favicon-32.png`
      },
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
    name: 'Mountwater Capital',
    description: 'Mountwater Capital is connecting investors to cash-flow positive properties and driving growth for investors and communities alike.',
    url:"https://www.mountwatercapital.com"
  },
}
