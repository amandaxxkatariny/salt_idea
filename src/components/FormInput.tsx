/* eslint-disable multiline-ternary */
import { useCallback, useState } from 'react'

import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import {
  Input as ChakraInput,
  InputGroup,
  InputLeftElement,
  InputProps as ChakraInputProps,
  InputRightElement,
  useColorModeValue
} from '@chakra-ui/react'

interface IconProps extends ChakraInputProps {
  leftIcon: React.ReactChild
}

const FormInput = ({ leftIcon, type, ...rest }: IconProps) => {
  const [show, setShow] = useState(type === 'password')
  const handleClick = useCallback(() => setShow(state => !state), [])

  return (
    <InputGroup alignItems="center">
      <InputLeftElement pointerEvents="none" top="inherit">
        {leftIcon}
      </InputLeftElement>

      <ChakraInput
        size="lg"
        bg={useColorModeValue('gray.50', 'gray.800')}
        type={show ? 'text' : 'password'}
        focusBorderColor="brand.500"
        borderRadius="sm"
        {...rest}
      />
      {type === 'password' && (
        <InputRightElement onClick={handleClick} top="inherit">
          {show ? (
            <ViewOffIcon color="gray.400" />
          ) : (
            <ViewIcon color="gray.400" />
          )}
        </InputRightElement>
      )}
    </InputGroup>
  )
}

export default FormInput
