import {
  Flex,
  Image,
  useBreakpointValue,
  useColorModeValue
} from '@chakra-ui/react'

import Drawer from './Drawer'
import HeaderContent from './HeaderContent'

export default function Header() {
  const isMDBreakingpoin = useBreakpointValue({ base: true, md: false })

  return (
    <Flex
      h={70}
      minW={320}
      zIndex={800}
      position="fixed"
      top={0}
      right={0}
      left={0}
      bg={useColorModeValue('brand.500', 'gray.700')}
      px={8}
      align="center"
      shadow="base"
      borderBottom="1px solid"
      borderBottomColor={useColorModeValue('brand.400', 'whiteAlpha.100')}
    >
      <Image src={'/logo-dark.png'} alt="Salt" h="60%" alignSelf="center" />

      {!isMDBreakingpoin ? <HeaderContent /> : <Drawer />}
    </Flex>
  )
}
