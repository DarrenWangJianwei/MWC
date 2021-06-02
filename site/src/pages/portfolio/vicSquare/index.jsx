import React from 'react'
import { graphql } from 'gatsby'
import { Container } from 'theme-ui'
import Layout from '@solid-ui-layout/Layout'
import Seo from '@solid-ui-components/Seo'
import Divider from '@solid-ui-components/Divider'
import ModalWithTabs from '@solid-ui-blocks/Modal/Block01'
import Header from '@solid-ui-blocks/Header/Block01'
import Hero from '@solid-ui-blocks/Hero/Block02'
import Hero2 from '@solid-ui-blocks/Hero/Block01'
import ContentOne from '@solid-ui-blocks/Content/Block01'
import ContentTwo from '@solid-ui-blocks/Features/Block06'
import Blog from '@solid-ui-blocks/Blog/Block01'
import Footer from '@solid-ui-blocks/Footer/Block01'
import { normalizeBlockContentNodes } from '@blocks-helpers'
import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'
import styles from './_styles'

const digitaloceanspaces =
  'https://mountwaterimages.sfo3.digitaloceanspaces.com'
const images = [
  {
    original: digitaloceanspaces + '/victoria_square/gallery/VicSquare-1.jpg',
    thumbnail: digitaloceanspaces + '/victoria_square/gallery/VicSquare-1.jpg'
  },
  {
    original: digitaloceanspaces + '/victoria_square/gallery/VicSquare-2.jpg',
    thumbnail: digitaloceanspaces + '/victoria_square/gallery/VicSquare-2.jpg'
  },
  {
    original: digitaloceanspaces + '/victoria_square/gallery/VicSquare-3.jpg',
    thumbnail: digitaloceanspaces + '/victoria_square/gallery/VicSquare-3.jpg'
  },
  {
    original: digitaloceanspaces + '/victoria_square/gallery/VicSquare-4.jpg',
    thumbnail: digitaloceanspaces + '/victoria_square/gallery/VicSquare-4.jpg'
  },
  {
    original: digitaloceanspaces + '/victoria_square/gallery/VicSquare-5.jpg',
    thumbnail: digitaloceanspaces + '/victoria_square/gallery/VicSquare-5.jpg'
  },
  {
    original: digitaloceanspaces + '/victoria_square/gallery/VicSquare-6.jpg',
    thumbnail: digitaloceanspaces + '/victoria_square/gallery/VicSquare-6.jpg'
  },
  {
    original: digitaloceanspaces + '/victoria_square/gallery/VicSquare-7.jpg',
    thumbnail: digitaloceanspaces + '/victoria_square/gallery/VicSquare-7.jpg'
  },
  {
    original: digitaloceanspaces + '/victoria_square/gallery/VicSquare-8.jpg',
    thumbnail: digitaloceanspaces + '/victoria_square/gallery/VicSquare-8.jpg'
  },
  {
    original: digitaloceanspaces + '/victoria_square/gallery/VicSquare-9.jpg',
    thumbnail: digitaloceanspaces + '/victoria_square/gallery/VicSquare-9.jpg'
  },
  {
    original: digitaloceanspaces + '/victoria_square/gallery/VicSquare-10.jpg',
    thumbnail: digitaloceanspaces + '/victoria_square/gallery/VicSquare-10.jpg'
  }
]
const VicSquare = props => {
  const { allBlockContent } = props.data
  const content = normalizeBlockContentNodes(allBlockContent?.nodes)

  return (
    <>
      <Layout {...props}>
        <Seo title='Home' />
        {/* Modals */}
        <ModalWithTabs content={content['contact']} />
        {/* Blocks */}
        <Header content={content['header']} />
        <Divider space='5' />
        <Hero content={content['hero']} reverse />
        <Divider space='4' />
        <ImageGallery items={images} />
        <Divider space='4' />
        <Container variant='narrow'>
          <ContentTwo content={content['summary']} />
          <Divider space='2' />
          <ContentOne content={content['property-description']} />
          <Divider space='2' />
          <ContentOne content={content['location']} />
          <Divider space='2' />
          <ContentOne content={content['property-access']} />
          <Divider space='2' />
          <ContentOne content={content['parking']} />
          <Divider space='2' />
          <ContentOne content={content['transit']} />
          <Divider space='2' />
          <ContentOne content={content['value-opportunity']} />
        </Container>
        <Divider space='5' />
        <Container variant='full' sx={styles.heroContainer}>
          <Hero2 content={content['leasing-opportunities']} reverse />
        </Container>
        <Divider space='4' />
        <Blog content={content['storeCards']} />
        <Divider space='4' />
        <Footer content={content['footer']} />
      </Layout>
    </>
  )
}

export const query = graphql`
  query innerpageVicSquareBlockContent {
    allBlockContent(
      filter: { page: { in: ["site/portfolio/vicSquare", "shared"] } }
    ) {
      nodes {
        ...BlockContent
      }
    }
  }
`

export default VicSquare
