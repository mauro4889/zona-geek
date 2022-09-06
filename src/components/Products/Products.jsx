import React from 'react'
import { Box, Button, Flex, Image, Select, Text } from '@chakra-ui/react'
import { Card } from '../Card/Card'

export const Products = () => {
    return (
        <Box mt='10%' >
            <Text fontSize='2xl' textAlign='center' mb='5%' >NUESTROS PRODUCTOS</Text>
            <Select w='80%' m='auto' placeholder='Seleccione categoria'>
                <option value='option1'>Todos</option>
                <option value='option2'>Teclado</option>
                <option value='option3'>Mouse</option>
                <option value='option3'>Monitor</option>
                <option value='option3'>Gabinete</option>
                <option value='option3'>Placa de video</option>
            </Select>
            <Box w='80%' m='auto' mt='5%'>
                <Flex direction='column' >
                    <Card/>
                </Flex>
            </Box>
        </Box>
    )
}
