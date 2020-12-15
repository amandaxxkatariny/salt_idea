import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const customTheme = extendTheme({
  colors: {
    brand: {
      50: '#eef7fb',
      100: '#cde6f4',
      200: '#9bcde8',
      300: '#2d92c8',
      400: '#2679a6',
      500: '#174a66',
      600: '#133d53',
      700: '#0f3143',
      800: '#0B2432',
      900: '#081721'
    },
    // gray: {
    //   300: '#e1e1e6',
    //   600: '#29292e',
    //   700: '#202024',
    //   800: '#121214'
    // },
    purple: {
      500: '#8257e5'
    }
  },
  styles: {
    global: props => ({
      body: {
        color: mode('gray.700', 'whiteAlpha.900')(props),
        fontFamily: 'Inter, sans-serif',
        '.deleted': {
          color: '#ff8383 !important',
          fontStyle: 'normal !important'
        },
        '.inserted': {
          color: '#b5f4a5 !important',
          fontStyle: 'normal !important'
        }
      }
    })
  },
  shadows: {
    base: '0px 1px 3px 0px rgba(54,74,99,0.05)'
  },
  radii: {
    sm: '5px',
    md: '8px'
  },
  textStyles: {
    heading: {
      textAlign: 'center',
      fontWeight: 'bold',
      letterSpacing: '-0.015em',
      lineHeight: '1.24',
      fontSize: { base: '2rem', md: '3.5rem' }
    },
    'heading-2': {
      textAlign: 'center',
      fontWeight: 'bold',
      letterSpacing: '-0.015em',
      lineHeight: '1.24',
      fontSize: { base: '1.75rem', md: '2.75rem' }
    },
    caps: {
      textTransform: 'uppercase',
      fontSize: 'sm',
      letterSpacing: 'widest',
      fontWeight: 'bold'
    }
  }
})

export default customTheme
