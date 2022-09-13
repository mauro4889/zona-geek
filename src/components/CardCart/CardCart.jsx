import {
    Button,
    Center,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { agregarCart, removerProducto } from '../../redux/cart/actionCart';

export const CardCart = ({title, desc, price, img, id, quantity}) => {
    const dispatch = useDispatch()
    return (
        <Center py={6}>
            <Stack
                borderWidth="1px"
                borderRadius="lg"
                minW={{ xs:'10%', sm: '100%', md: '100px' }}
                maxW={{ xs:'10%', sm: '100%', md: '100px' }}
                height={{ xs:'20%', sm: '476px', md: '10rem' }}
                direction={{ base: 'column', md: 'row' }}
                bg={useColorModeValue('white', 'gray.900')}
                boxShadow={'2xl'}
                padding={4}
                >
                <Flex flex={1} bg="blue.200">
                    <Image
                        objectFit="cover"
                        boxSize="100%"
                        src={img}                        
                    />
                </Flex>
                <Stack
                    flex={1}
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    p={1}
                    pt={2}>
                    <Heading fontSize={'2xl'} fontFamily={'body'}>
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
                            _focus={{
                                bg: 'gray.200',
                            }}
                            onClick={()=>dispatch(removerProducto({id}))}>
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
                            onClick={()=>dispatch(agregarCart({id}))}>
                            +
                        </Button>
                    </Stack>
                </Stack>
            </Stack>
        </Center>
    );
}