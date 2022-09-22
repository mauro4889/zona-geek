import { DeleteIcon } from '@chakra-ui/icons';
import {
    Button,
    Center,
    Heading,
    Icon,
    Image,
    Stack,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { agregarCart, eliminarProducto, removerProducto } from '../../redux/cart/actionCart';

export const CardCart = ({ title, desc, price, img, id, quantity }) => {
    const dispatch = useDispatch()
    return (
        <Center py={6}>
            <Stack
                borderWidth="1px"
                borderRadius="lg"
                borderColor='black'
                w='100%'
                h='15em'
                direction={{ base: 'column', md: 'row' }}
                bg={useColorModeValue('white', 'gray.900')}
                boxShadow={'2xl'}
                padding={4}
            >
                <Image
                    objectFit="cover"
                    w='10em'
                    h='5em'
                    m='auto'
                    src={img}
                />
                <Stack
                    flex={1}
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    p={1}
                    pt={2}>
                    <Button onClick={()=>dispatch(eliminarProducto({id}))}><Icon as={DeleteIcon}/></Button>
                    <Heading fontSize={'2xl'} fontFamily={'body'} textAlign='center'>
                        {title}
                    </Heading>
                    <Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>
                        {desc}
                    </Text>
                    <Stack
                        width={'100%'}
                        mt={'2rem'}
                        direction={'row'}
                        padding={2}
                        justifyContent={'space-between'}
                        alignItems={'center'}>
                        <Button
                            flex={1}
                            fontSize={'sm'}
                            rounded={'full'}
                            bg={'blue.400'}
                            _hover={{
                                bg: 'blue.500',
                            }}
                            _focus={{
                                bg: 'blue.500',
                            }}
                            onClick={() => dispatch(removerProducto({ id }))}>
                            -
                        </Button>
                        <Text>{quantity}</Text>
                        <Button
                            flex={1}
                            fontSize={'sm'}
                            rounded={'full'}
                            bg={'blue.400'}
                            color={'white'}
                            boxShadow={
                                '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                            }
                            _hover={{
                                bg: 'blue.500',
                            }}
                            _focus={{
                                bg: 'blue.500',
                            }}
                            onClick={() => dispatch(agregarCart({ id }))}>
                            +
                        </Button>
                    </Stack>
                </Stack>
            </Stack>
        </Center>
    );
}