import React from 'react'
import { graphql } from 'gatsby'
import { Container } from 'theme-ui'
import Layout from '@solid-ui-layout/Layout'
import Seo from '@solid-ui-components/Seo'
import Divider from '@solid-ui-components/Divider'
import ModalWithTabs from '@solid-ui-blocks/Modal/Block01'
import Header from '@solid-ui-blocks/Header/Block01'
import Hero from '@solid-ui-blocks/Hero/Block02'
import JoinCompanies from '@solid-ui-blocks/Content/Block01'
import Services from '@solid-ui-blocks/Features/Block05'
import WhyChooseUs from '@solid-ui-blocks/Features/Block01'
import Contact from '@solid-ui-blocks/CallToAction/Block02'
import Footer from '@solid-ui-blocks/Footer/Block01'
import { normalizeBlockContentNodes } from '@blocks-helpers'
import theme from '../_theme'
import styles from './_styles'

const Investors = props => {
  const { allBlockContent } = props.data
  const content = normalizeBlockContentNodes(allBlockContent?.nodes)

  return (
    <Layout theme={theme} {...props}>
      <Seo
        title='Investor Relations - Mountwater Capital'
        description={
          'You’re a principled institutional or individual investor seeking to maximize your return on your capital investment.You’re also looking for the best defensive strategy to deal with uncertainty in other parts of the market. And you’re looking to participate with other experts and collaborate to achieve these goals.'
        }
        url='https://www.mountwatercapital.com/investors'
        thumbnail='https://mountwaterimages.sfo3.cdn.digitaloceanspaces.com/static/logo.JPG'
        keywords={[
          'Best Investment Firm',
          'Values-driven',
          'real estate investment ',
          'cash-flow positive properties',
          'Asset Management',
          'Property Management',
          'Investment Management'
        ]}
      />
      {/* Modals */}
      <ModalWithTabs content={content['contact']} />
      {/* Blocks */}
      <Header content={content['header']} />
      <Divider space='5' />
      <Divider space='5' />
      <Container variant='full' sx={styles.heroContainer}>
        <Hero content={content['hero']} />
      </Container>
      <Divider space='3' />
      <JoinCompanies content={content['companies-join']} />
      <Divider space='5' />
      <Services content={content['services']} />
      <Divider space='5' />
      <Container variant='wide' sx={styles.whyChooseUsContainer}>
        <WhyChooseUs content={content['why-choose-us']} />
      </Container>
      <Divider space='3' />
      <Contact content={content['link-to-portfolio']} />
      <Divider space='5' />
      <Footer content={content['footer']} />
    </Layout>
  )
}

export const query = graphql`
  query homepageInvestorsBlockontent {
    allBlockContent(filter: { page: { in: ["site/investors", "shared"] } }) {
      nodes {
        ...BlockContent
      }
    }
  }
`
export default Investors
