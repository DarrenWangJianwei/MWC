import React from 'react'
import { graphql } from 'gatsby'
import { Container } from 'theme-ui'
import Layout from '@solid-ui-layout/Layout'
import Seo from '@solid-ui-components/Seo'
import Divider from '@solid-ui-components/Divider'
import ModalWithTabs from '@solid-ui-blocks/Modal/Block01'
import Header from '@solid-ui-blocks/Header/Block01'
import Hero from '@solid-ui-blocks/Hero/Block01'
import Content from '@solid-ui-blocks/Content/Block01'
import Footer from '@solid-ui-blocks/Footer/Block01'
import WhyChooseUs from '@solid-ui-blocks/Features/Block01'
import FeatureOne from '@solid-ui-blocks/FeaturesWithPhoto/Block01'
import Team from '@solid-ui-blocks/Hero/Block03'
import { normalizeBlockContentNodes } from '@blocks-helpers'
import styles from './_styles'

const Firm = props => {
  const { allBlockContent } = props.data
  const content = normalizeBlockContentNodes(allBlockContent?.nodes)

  return (
    <Layout {...props}>
      <Seo title='Home' />
      {/* Modals */}
      <ModalWithTabs content={content['contact']} />
      {/* Blocks */}
      <Header content={content['header']} />
      <Container variant='full' sx={styles.heroContainer}>
        <Hero content={content['hero']} reverse />
      </Container>
      <Divider space='5' />
      <Content content={content['earning-building-retaining']} />
      <Divider space='5' />
      <Container variant='wide' sx={styles.teamContainer}>
        <Team content={content['link-to-team']} />
      </Container>
      <Divider space='5' />
      <FeatureOne content={content['strategy']} />
      <Divider space='5' />
      <Container variant='wide' sx={styles.whyChooseUsContainer}>
        <WhyChooseUs content={content['value']} />
      </Container>
      <Divider space='5' />
      <Footer content={content['footer']} />
    </Layout>
  )
}

export const query = graphql`
  query innerpageFirmBlockContent {
    allBlockContent(filter: { page: { in: ["site/firm", "shared"] } }) {
      nodes {
        ...BlockContent
      }
    }
  }
`

export default Firm
