import { Flex, useBreakpointValue, useColorModeValue } from '@chakra-ui/react'

import NextImage from 'next/image'

import Drawer from './Drawer'
import HeaderContent from './HeaderContent'

export default function Header(): JSX.Element {
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
      justify="center"
      shadow="base"
      borderBottom="1px solid"
      borderBottomColor={useColorModeValue('brand.400', 'whiteAlpha.100')}
    >
      <Flex w="100%" maxW={1120} h="full" align="center">
        <NextImage src="/logo-dark.png" alt="Salt" height="42px" width="92px" />

        {!isMDBreakingpoin ? <HeaderContent /> : <Drawer />}

        {/* <Drawer /> */}
      </Flex>
    </Flex>
  )
}
