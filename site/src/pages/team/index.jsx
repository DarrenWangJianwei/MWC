import React from 'react'
import { graphql } from 'gatsby'
import Layout from '@solid-ui-layout/Layout'
import Seo from '@solid-ui-components/Seo'
import Divider from '@solid-ui-components/Divider'
import ModalWithTabs from '@solid-ui-blocks/Modal/Block01'
import ModalSimple from '@solid-ui-blocks/Modal/Block02'
import Header from '@solid-ui-blocks/Header/Block01'
import Testimonials from '@solid-ui-blocks/Testimonials/Block01'
import Contact from '@solid-ui-blocks/CallToAction/Block02'
import Footer from '@solid-ui-blocks/Footer/Block01'
import { normalizeBlockContentNodes } from '@blocks-helpers'
import theme from '../_theme'

const IndexPage = props => {
  const { allBlockContent } = props.data
  const content = normalizeBlockContentNodes(allBlockContent?.nodes)

  return (
    <Layout theme={theme} {...props}>
      <Seo title='Home' />
      {/* Modals */}
      <ModalWithTabs content={content['authentication']} reverse />
      <ModalWithTabs content={content['contact']} />
      <ModalSimple content={content['TonyYan']} />
      <ModalSimple content={content['RichardCao']} />
      <ModalSimple content={content['BingWang']} />
      <ModalSimple content={content['ChenTan']} />
      {/* Blocks */}
      <Header content={content['header']} />
      <Divider space='5' />
      <Divider space='5' />
      <Testimonials content={content['testimonials']} />
      <Divider space='3' />
      <Contact content={content['cta']} />
      <Divider space='5' />
      <Footer content={content['footer']} />
    </Layout>
  )
}

export const query = graphql`
  query innerpageSiteTeamBlockContent {
    allBlockContent(filter: { page: { in: ["site/team", "shared"] } }) {
      nodes {
        ...BlockContent
      }
    }
  }
`
export default IndexPage
