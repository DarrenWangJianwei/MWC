import React from 'react'
import { graphql } from 'gatsby'
import Layout from '@solid-ui-layout/Layout'
import Seo from '@solid-ui-components/Seo'
import Divider from '@solid-ui-components/Divider'
import ModalWithTabs from '@solid-ui-blocks/Modal/Block01'
import Header from '@solid-ui-blocks/Header/Block01'
import Hero from '@solid-ui-blocks/Hero/Block03'
import Content from '@solid-ui-blocks/Content/Block01'
import Footer from '@solid-ui-blocks/Footer/Block01'
import { normalizeBlockContentNodes } from '@blocks-helpers'

const Terms = props => {
  const { allBlockContent } = props.data
  const content = normalizeBlockContentNodes(allBlockContent?.nodes)

  return (
    <Layout {...props}>
      <Seo title='Home' />
      {/* Modals */}
      <ModalWithTabs content={content['contact']} />
      {/* Blocks */}
      <Header content={content['header']} />
      <Divider space='5' />
      <Hero content={content['hero']} />
      <Divider space='5' />
      <Content content={content['terms-condition']} />
      <Divider space='4' />
      <Content content={content['terms-general']} />
      <Divider space='3' />
      <Content content={content['terms-disclaimer-limitation']} />
      <Divider space='3' />
      <Content content={content['terms-privacy']} />
      <Divider space='3' />
      <Content content={content['terms-copyrights-trademarks']} />
      <Divider space='5' />
      <Footer content={content['footer']} />
    </Layout>
  )
}

export const query = graphql`
  query innerpageTermsBlockContent {
    allBlockContent(filter: { page: { in: ["site/terms", "shared"] } }) {
      nodes {
        ...BlockContent
      }
    }
  }
`

export default Terms
