import React from 'react'
import { Container, Box, css } from 'theme-ui'
import ContentText from '@solid-ui-components/ContentText'
import Reveal from '@solid-ui-components/Reveal'
import ContentImages from '@solid-ui-components/ContentImages'
import ContentButtons from '@solid-ui-components/ContentButtons'
import QuickSignupForm from '@solid-ui-components/QuickSignupForm'

const styles = {
  title: {
    color: 'alphaDark',
    background: t => `
      linear-gradient(
        125deg,
        ${t.colors.alpha} 32.5%,
        ${t.colors.alphaDark} 50.5%)
    `,
    WebkitBackgroundClip: `text`,
    WebkitTextFillColor: `transparent`
  }
}

const HeroBlock02 = ({ content: { text, buttons, form, images } }) => (
  <Container sx={{ textAlign: `center` }}>
    <Reveal effect='fadeInDown'>
      <ContentText
        content={text?.[0]}
        sx={{
          ...(!text?.[0]?.color && styles.title)
        }}
      />
      <ContentText
        content={text?.[1]}
        mb='4'
        mx='auto'
        sx={{
          ...(!text?.[1]?.color && styles.title)
        }}
      />
      <ContentText content={text?.[2]} mb='4' mx='auto' />
    </Reveal>
    {buttons && (
      <Reveal effect='fadeInUp' duration={0.7} css={css({ mb: 5 })}>
        <ContentButtons content={buttons} />
      </Reveal>
    )}
    {form && (
      <Reveal effect='fadeInRight' delay={1} css={css({ mb: 5 })}>
        <QuickSignupForm {...form} space={3} />
      </Reveal>
    )}

    <Box sx={{ position: `relative` }}>
      <ContentImages
        content={{ images }}
        loading='eager'
        imagePosition='center'
        imageEffect='fadeInUp'
      />
    </Box>
  </Container>
)

export default HeroBlock02
