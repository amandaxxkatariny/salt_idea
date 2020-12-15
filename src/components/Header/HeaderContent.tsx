import { useMemo } from 'react'

import {
  HStack,
  Link,
  ListItem,
  UnorderedList,
  useColorModeValue
} from '@chakra-ui/react'

import ThemeButton from '../ThemeButton'

export default function HeaderContent() {
  const borderColor = useColorModeValue('orange.500', 'brand.400')

  const itemStyle = useMemo(
    () => ({
      borderBottomColor: borderColor,
      color: 'white'
    }),
    [borderColor]
  )

  return (
    <>
      <HStack as={UnorderedList} spacing={5} h="full" ml={16}>
        {['Pedidos', 'Aprovação'].map((name, index) => (
          <ListItem
            d="flex"
            key={index}
            h="full"
            color="whiteAlpha.700"
            alignItems="center"
            borderBottom="2px solid"
            borderColor="transparent"
            fontWeight="medium"
            transition="all 0.2s ease"
            _hover={itemStyle}
          >
            <Link _hover={{ textDecor: 'none' }}>{name}</Link>
          </ListItem>
        ))}
      </HStack>

      {/* <ThemeButton aria-label="Theme Toggle" /> */}
    </>
  )
}
