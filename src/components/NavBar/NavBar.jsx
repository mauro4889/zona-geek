import { HamburgerIcon } from '@chakra-ui/icons'
import {
    useDisclosure,
    Box,
    Button,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerHeader,
    Drawer,
    DrawerBody,
    Link,
    ListItem,
    UnorderedList,
    Heading,
    Flex,
    Container
} from '@chakra-ui/react'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export const NavBar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    return (
        <Box w='100%' p='2%' borderBottom='1px'>
            <Flex justify='space-between'>
                <Button bg='white' ref={btnRef} onClick={onOpen}>
                    <HamburgerIcon color='black' fontSize='25px' />
                </Button>
                <Drawer
                    isOpen={isOpen}
                    placement='left'
                    onClose={onClose}
                    finalFocusRef={btnRef}
                >
                    <DrawerOverlay />
                    <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerHeader m='auto'>Zona Geek</DrawerHeader>

                        <DrawerBody>
                            <UnorderedList listStyleType='none'>
                                <Flex direction='column' justify='space-around' h='80vh' fontSize='xl' >
                                    <ListItem><Link>Inicio</Link></ListItem>
                                    <ListItem><Link>Categoria</Link></ListItem>
                                    <ListItem><Link>Contacto</Link></ListItem>
                                    <ListItem><Link>Login</Link></ListItem>
                                </Flex>
                            </UnorderedList>
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>
                <Heading fontSize='3xl' mr='10%' >Zona Geek</Heading>
                <Flex>
                    <Button borderRadius='50%'><FontAwesomeIcon icon={faCartShopping} /></Button>
                    <Button borderRadius='50%'><FontAwesomeIcon icon={faUser} /></Button>
                </Flex>

            </Flex>

        </Box>
    )
}
