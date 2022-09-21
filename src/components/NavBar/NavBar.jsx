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
    ListItem,
    UnorderedList,
    Heading,
    Flex,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Stack,
    Text,
    Avatar,
    Badge
} from '@chakra-ui/react'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { auth } from '../../firebase/firebase-utils'
import { formatPrice } from '../../utils/formatPrice'
import { CardCart } from '../CardCart/CardCart'





export const NavBar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const { products, total } = useSelector((state) => state.carrito)
    const { user } = useSelector((state) => state.user)
    return (
        <Box w='100%' p='2%' borderBottom='1px'>
            <Flex justify='space-between'>
                <Button bg='none' ref={btnRef} onClick={onOpen}>
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
                                    <ListItem><NavLink to='/' >Inicio</NavLink></ListItem>
                                    <ListItem><NavLink to='contact'>Contacto</NavLink></ListItem>
                                    <ListItem><NavLink to='/login' >Iniciar sesion</NavLink></ListItem>
                                </Flex>
                            </UnorderedList>
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>
                <Heading fontSize='3xl' mr='10%' cursor='pointer' > <NavLink to='/'>Zona Geek</NavLink> </Heading>
                <Flex justify='center' aling='center' >
                    <Menu>
                        <NavLink to='/checkout'>
                            <MenuButton as={Button} borderRadius='50%' isDisabled={!user} bg='none'>
                                <FontAwesomeIcon icon={faCartShopping} />
                                <Badge variant='solid' colorScheme='green' borderRadius='100%'>
                                    {products.length}
                                </Badge>
                            </MenuButton>
                        </NavLink>
                    </Menu>
                    <Text w='8em' m='5%' textAlign='right' cursor='pointer' >
                        {user ? `${user.name}` : <NavLink to='/login' >Iniciar sesion</NavLink>}
                    </Text>
                    <Menu >
                        <MenuButton as={Button} bg='none' _hover={{ bg: 'none' }} borderRadius='50%' isDisabled={!user}>
                            {user ? <Avatar objectFit={'cover'} src={user.photoURL} /> : <FontAwesomeIcon icon={faUser} />}
                        </MenuButton>
                        <MenuList >
                        <NavLink to='/resumen'><MenuItem>Resumen</MenuItem></NavLink>
                            <MenuItem onClick={() => auth.signOut()}>Cerrar sesion</MenuItem>
                        </MenuList>
                    </Menu>
                </Flex>
            </Flex>

        </Box>
    )
}
