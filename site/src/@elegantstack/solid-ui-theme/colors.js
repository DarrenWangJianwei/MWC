// Importing default theme color object to mutate it
import defaultColors from '@elegantstack/solid-ui-theme/src/colors'

// Using tailwind preset colors
import colors from '@elegantstack/solid-ui-theme/src/color-preset'

export default {
  ...defaultColors,
  // Alpha (primary)
  alphaLighter: colors.blue[100],
  alphaLight: colors.blue[300],
  alpha: colors.blue[800],
  alphaDark: colors.blue[600],
  alphaDarker: colors.blue[800],
  // beta (secondary)
  betaLighter: colors.lime[100],
  betaLight: colors.lime[300],
  beta: colors.lime[500],
  betaDark: colors.lime[700],
  betaDarker: colors.lime[800]
}