import { EmailIcon, LockIcon, MoonIcon, SunIcon } from '@chakra-ui/icons'
import {
  Flex,
  Link,
  Button,
  Image,
  useColorMode,
  useColorModeValue,
  IconButton,
  VStack
} from '@chakra-ui/react'

import Head from 'next/head'

import FormInput from '~/components/FormInput'

export default function Login() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Flex
      as="main"
      height="100vh"
      bg={useColorModeValue('gray.300', 'gray.800')}
      justifyContent="center"
      alignItems="center"
    >
      <Head>
        <title>Login</title>
      </Head>
      <IconButton
        onClick={toggleColorMode}
        icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        aria-label="Toggle Theme"
        position="absolute"
        top={12}
        left={12}
      />

      <Flex
        gridArea="form"
        boxShadow="0 1px 4px 0 rgba(0, 0, 0, 0.08)"
        backgroundColor={useColorModeValue('gray.50', 'gray.700')}
        borderRadius="md"
        direction="column"
        align="stretch"
        p={[8, 12, 12, 16]}
        w="90%"
        maxW={480}
      >
        <Image
          src={'/logo-light.png'}
          alt="Salt"
          w="50%"
          alignSelf="center"
          h="auto"
          mb={8}
        />
        <VStack>
          <FormInput
            placeholder="E-mail"
            leftIcon={<EmailIcon color="gray.400" />}
          />
          <FormInput
            placeholder="Senha"
            type="password"
            leftIcon={<LockIcon color="gray.400" />}
          />
        </VStack>

        <Link
          alignSelf="flex-start"
          marginTop={2}
          fontSize="sm"
          color={useColorModeValue('brand.600', 'brand.200')}
          fontWeight="bold"
        >
          Esqueci minha senha
        </Link>

        <Button
          colorScheme="brand"
          height="50px"
          borderRadius="sm"
          marginTop={16}
        >
          ENTRAR
        </Button>
      </Flex>
    </Flex>
  )
}
