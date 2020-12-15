import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { IconButton, IconButtonProps, useColorMode } from '@chakra-ui/react'

export default function ThemeButton(props: IconButtonProps) {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <IconButton
      onClick={toggleColorMode}
      colorScheme="brand"
      icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
      ml="auto"
      {...props}
    />
  )
}
