import React, { useState } from 'react'
import { Box, Button, Flex, Select, Text } from '@chakra-ui/react'
import { Card } from '../Card/Card'
import {products, _products} from '../../data/products'
import { ScrollButton } from '../ScrollButton/ScrollButton'

export const Products = () => {
    const [categoria, setCategoria] = useState('')
    const handleSelect = (e) =>{
        setCategoria(e.target.value)
    }
    return (
        <Box mt='8%' >
            <Text fontSize='3xl' fontWeight='bold' textAlign='center' mb='5%' >NUESTROS PRODUCTOS</Text>
            <Select w='80%' m='auto' placeholder='Seleccione categoria' onChange={handleSelect} borderColor='black' >
                <option value=''>Todos</option>
                <option value='teclado'>Teclado</option>
                <option value='mouse'>Mouse</option>
                <option value='monitor'>Monitor</option>
                <option value='gabinete'>Gabinete</option>
                <option value='gpu'>Placa de video</option>
            </Select>
            <ScrollButton/>
            <Box w='80%' m='auto' mt='2%'>
                <Flex direction='row' wrap='wrap' alignItems='center' justifyContent='center' gap='5%' >
                    {Object.entries(_products).map(([category, product])=>
                        !categoria || category === categoria ?
                        product.map(product =><Card key={products.id} {...product}/>) 
                        : null          
                    )}                    
                </Flex>
            </Box>
        </Box>
    )
    
}
