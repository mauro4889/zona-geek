import React from 'react'
import { Box, Button, Flex, Image, Select, Text } from '@chakra-ui/react'
import image from '../../assets/img/products/1.webp'
import { CheckIcon } from '@chakra-ui/icons'

export const Products = () => {
    return (
        <Box mt='10%' >
            <Text fontSize='2xl' textAlign='center' mb='5%' >NUESTROS PRODUCTOS</Text>
            <Select w='80%' m='auto' placeholder='Seleccione categoria'>
                <option value='option1'>Todos</option>
                <option value='option2'>Categoria 1</option>
                <option value='option3'>Categoria 2</option>
                <option value='option3'>Categoria 3</option>
            </Select>
            <Box border='1px' borderRadius='5px' w='80%' m='auto' mt='5%'>
                <Flex direction='column' >
                    <Image src={image} ></Image>
                    <Text fontSize='xl' textAlign='center' >Producto</Text>
                    <Text textAlign='center' mb='5%' >Precio: $2.000</Text>
                    <Button leftIcon={<CheckIcon />} bg='#474745' color='#fff' variant='solid' m='auto' mb='5%'>
                        Comprar
                    </Button>
                </Flex>
            </Box>
        </Box>
    )
}
