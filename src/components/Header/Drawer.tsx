import { HamburgerIcon } from '@chakra-ui/icons'
import {
  DrawerBody,
  Drawer as ChakraDrawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  useDisclosure,
  IconButton,
  VStack,
  UnorderedList,
  ListItem,
  Link
} from '@chakra-ui/react'

import ThemeButton from '../ThemeButton'

export default function Drawer() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <IconButton
        icon={<HamburgerIcon boxSize={6} />}
        ml="auto"
        colorScheme="brand"
        bg="transparent"
        color="white"
        onClick={onOpen}
        aria-label="Hamburger Button"
      />
      <ChakraDrawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />

            <DrawerBody mt={12}>
              <VStack as={UnorderedList} spacing={5}>
                {['Pedidos', 'Aprovação'].map((name, index) => (
                  <ListItem
                    d="flex"
                    key={index}
                    h="full"
                    alignItems="center"
                    borderBottom="2px solid"
                    borderColor="transparent"
                    fontWeight="medium"
                    transition="all 0.2s ease"
                    py={2}
                    _hover={{
                      borderBottomColor: 'brand.400'
                    }}
                  >
                    <Link _hover={{ textDecor: 'none' }}>{name}</Link>
                  </ListItem>
                ))}
              </VStack>
              {/* <ThemeButton
                aria-label="Toggle Theme"
                position="absolute"
                bottom="0.5rem"
                right="0.75rem"
              /> */}
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </ChakraDrawer>
    </>
  )
}
