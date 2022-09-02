import React from 'react'
import {
    Box,
    Text,
    Flex,
    Image,
    Button
} from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'

export const Recommended = () => {
    return (
        <>
            <Box mt='5%' w='100vw'>
                <Text fontSize='2xl' textAlign='center' mb='15%' >Nuestra recomendaciones</Text>
                <Flex direction='column' gap='15px' align='center' >
                    <Box border='1px' borderRadius='5px' pb='5%' w='60%'>
                        <Flex direction='column' gap='5px' align='center' >
                            <Text fontSize='lg' as='b' >Producto</Text>
                            <Image></Image>
                            <Text fontSize='md'>Descripcion</Text>
                            <Button leftIcon={<CheckIcon />} bg='#474745' color='#fff' variant='solid'>
                                Comprar
                            </Button>
                        </Flex>
                    </Box>
                    <Box border='1px' w='60%' borderRadius='5px' pb='5%'>
                        <Flex direction='column' gap='5px' align='center'>
                            <Text fontSize='lg' as='b' >Producto</Text>
                            <Image></Image>
                            <Text fontSize='md'>Descripcion</Text>
                            <Button leftIcon={<CheckIcon />} bg='#474745' color='#fff' variant='solid'>
                                Comprar
                            </Button>
                        </Flex>
                    </Box>
                    <Box border='1px' borderRadius='5px' pb='5%' w='60%'>
                        <Flex direction='column' gap='5px' align='center'>
                            <Text fontSize='lg'as='b' >Producto</Text>
                            <Image></Image>
                            <Text fontSize='md'>Descripcion</Text>
                            <Button leftIcon={<CheckIcon />} bg='#474745' color='#fff' variant='solid'>
                                Comprar
                            </Button>
                        </Flex>
                    </Box>
                </Flex>
            </Box>
        </>
    )
}
