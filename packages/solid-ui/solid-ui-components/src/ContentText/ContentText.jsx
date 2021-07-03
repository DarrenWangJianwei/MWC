import React from 'react'
import mergeWith from 'lodash.mergewith'
import { Text, Heading } from 'theme-ui'

const headings = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']
const aligns = ['left', 'center', 'right']
const ContentText = ({ as: CustomComponent, content, children, ...props }) => {
  if (!content || content.length < 1) return null

  const contentArray = Array.isArray(content) ? content : [content]

  return contentArray.map(({ text, ...contentRest }, index) => {
    if (!text) return null

    contentRest.mb = contentRest.space

    const { variant, align, ...mergedProps } = mergeWith(
      {},
      props,
      contentRest,
      (a, b) => (b === null ? a : undefined)
    )

    const isHeading = headings.includes(variant)
    const isAlign = aligns.includes(align)
    // Replace special colored parts in headings
    let textWithSpecial = null

    if (isHeading && !children) {
      textWithSpecial = text.split(/\*{2}(.*?)\*{2}/gi)
      for (var i = 1; i < textWithSpecial.length; i += 2) {
        textWithSpecial[i] = (
          <Text key={`item-${i}`} as='span' color='alpha'>
            {textWithSpecial[i]}
          </Text>
        )
      }
    }

    const beforeAlign = isHeading ? (
      <Heading
        key={`item-${index}`}
        variant={variant}
        as={variant}
        {...mergedProps}
      >
        {children || textWithSpecial || text}
      </Heading>
    ) : (
      <Text key={`item-${index}`} variant={variant} {...mergedProps}>
        {children || text}
      </Text>
    )
    return isAlign ? (
      <div key={`item-${index}`} style={{ textAlign: `${align}` }}>
        {beforeAlign}
      </div>
    ) : (
      <div key={`item-${index}`}>{beforeAlign}</div>
    )
  })
}

export default ContentText
