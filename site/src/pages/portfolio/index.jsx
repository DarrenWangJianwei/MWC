import React from 'react'
import { graphql } from 'gatsby'
import { Container } from 'theme-ui'
import Layout from '@solid-ui-layout/Layout'
import Seo from '@solid-ui-components/Seo'
import Divider from '@solid-ui-components/Divider'
import ModalWithTabs from '@solid-ui-blocks/Modal/Block01'
import Header from '@solid-ui-blocks/Header/Block01'
import Content from '@solid-ui-blocks/Content/Block02'
import Gallery from '@solid-ui-blocks/Blog/Block01'
import Consultation from '@solid-ui-blocks/Hero/Block03'
import Footer from '@solid-ui-blocks/Footer/Block01'
import { normalizeBlockContentNodes } from '@blocks-helpers'
import styles from './_styles'

const Portfolio = props => {
  const { allBlockContent } = props.data
  const content = normalizeBlockContentNodes(allBlockContent?.nodes)

  return (
    <Layout {...props}>
      <Seo
        title='MWC Portfolio - Mountwater Capital'
        description={'Commerical Real Estate.'}
        url='https://www.mountwatercapital.com/portfolio'
        thumbnail='https://mountwaterimages.sfo3.cdn.digitaloceanspaces.com/static/logo.JPG'
        keywords={[
          'MWC Portfolio',
          'Victoria Square Centre',
          'Capital City Centre East',
          'Capital City Centre West'
        ]}
      />
      {/* Modals */}
      <ModalWithTabs content={content['contact']} />
      {/* Blocks */}
      <Header content={content['header']} />
      <Divider space='5' />
      <Container variant='wide' sx={styles.heroContainer}>
        <Content content={content['hero']} />
        <Divider space='3' />
        <Gallery content={content['gallery']} />
      </Container>
      <Divider space='5' />
      <Container variant='wide' sx={styles.teamContainer}>
        <Consultation content={content['schedule']} />
      </Container>
      <Divider space='5' />
      <Footer content={content['footer']} />
    </Layout>
  )
}

export const query = graphql`
  query innerpagePortfolioBlockContent {
    allBlockContent(filter: { page: { in: ["site/portfolio", "shared"] } }) {
      nodes {
        ...BlockContent
      }
    }
  }
`

export default Portfolio
