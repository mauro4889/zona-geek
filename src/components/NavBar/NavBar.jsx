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
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Stack,
    Text
} from '@chakra-ui/react'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { formatPrice } from '../../utils/formatPrice'
import { CardCart } from '../CardCart/CardCart'





export const NavBar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const {products} = useSelector((state)=>state.carrito)
    const total = products.reduce((sub, product) => (sub += product.price * product.quantity), 0)
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
                                    <ListItem><NavLink to='/' >Inicio</NavLink></ListItem>
                                    <ListItem><NavLink to='contact'>Contacto</NavLink></ListItem>
                                    <ListItem><NavLink to='/login' >Iniciar sesion</NavLink></ListItem>
                                </Flex>
                            </UnorderedList>
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>
                <Heading fontSize='3xl' mr='10%' >Zona Geek</Heading>
                <Flex justify='center' aling='center' >
                    <Menu>
                        <MenuButton as={Button} borderRadius='50%'>
                            <FontAwesomeIcon icon={faCartShopping} />
                        </MenuButton>
                        <MenuList className='carrito' maxH={{xs:'150px', sm:'5%'}} w={{xs:'50px', sm:'50%'}} zIndex='100' overflow='scroll'>
                            {
                                products.map((product)=><CardCart key={product.id} {...product}/>)
                            }
                            <Stack>
                                <Text>Total: {formatPrice(total)}</Text>
                                <NavLink to='checkout' ><Button>Ir al carrito</Button></NavLink>                                
                            </Stack>                            
                        </MenuList>
                    </Menu>
                    <Menu>
                        <MenuButton as={Button} borderRadius='50%' >
                            <FontAwesomeIcon icon={faUser} />
                        </MenuButton>
                        <MenuList>
                            <MenuItem>Cuenta</MenuItem>
                            <MenuItem>Resumen</MenuItem>
                            <MenuItem>Cerrar sesion</MenuItem>
                        </MenuList>
                    </Menu>
                </Flex>
            </Flex>

        </Box>
    )
}
