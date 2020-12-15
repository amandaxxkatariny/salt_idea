import { ChakraProvider } from '@chakra-ui/react'

import customTheme from '~/styles/theme'

export function ThemeContainer({ children }: WithChildren) {
  return (
    <ChakraProvider resetCSS theme={customTheme}>
      {children}
    </ChakraProvider>
  )
}
