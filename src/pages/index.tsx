import { Box, Flex, Heading, useColorModeValue } from '@chakra-ui/react'

import Head from 'next/head'

import Header from '~/components/Header'

export default function Login() {
  return (
    <Flex w="100%" direction="column" minH="100vh">
      <Head>
        <title>Home</title>
      </Head>

      <Header />
      <Box
        p={8}
        flex={1}
        pt={24}
        bg={useColorModeValue('gray.100', 'gray.900')}
      >
        <Heading>Home</Heading>
      </Box>
    </Flex>
  )
}
