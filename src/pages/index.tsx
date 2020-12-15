import { Flex, Heading, useColorModeValue } from '@chakra-ui/react'

import Head from 'next/head'

import Header from '~/components/Header'

export default function Login() {
  return (
    <Flex w="100%" direction="column" minH="100vh">
      <Head>
        <title>Home</title>
      </Head>

      <Header />
      <Flex
        justify="center"
        p={8}
        pt={24}
        flex={1}
        bg={useColorModeValue('gray.100', 'gray.900')}
      >
        <Flex w="90%" maxW={1120}>
          <Heading>Home</Heading>
        </Flex>
      </Flex>
    </Flex>
  )
}
