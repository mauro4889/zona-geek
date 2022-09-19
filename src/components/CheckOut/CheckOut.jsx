import { Box, Button, Flex, FormControl, FormErrorMessage, FormHelperText, FormLabel, Input, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useRedirect } from '../../hooks/useRedirect'
import { CardCart } from '../CardCart/CardCart'

export const CheckOut = () => {
    const [input, setInput] = useState('')

    const handleInputChange = (e) => setInput(e.target.value)

    const isError = input === ''

    const {products} = useSelector((state)=>state.carrito)
    return (
        <Box p='5%'>
            <Text>Usuario</Text>
            <Flex gap='10%' wrap='wrap' >
                <Box>
                    <Flex gap='5%' wrap='wrap' >
                        <FormControl isInvalid={isError}>
                            <FormLabel>Nombre</FormLabel>
                            <Input
                                type='text'
                                value={input}
                                onChange={handleInputChange}
                            />
                            {!isError ? (
                                <FormHelperText>
                                    Ingrese su nombre
                                </FormHelperText>
                            ) : (
                                <FormErrorMessage>Se requiere un nombre.</FormErrorMessage>
                            )}
                        </FormControl>
                        <FormControl isInvalid={isError}>
                            <FormLabel>Email</FormLabel>
                            <Input
                                type='email'
                                value={input}
                                onChange={handleInputChange}
                            />
                            {!isError ? (
                                <FormHelperText>
                                    Ingrese su email
                                </FormHelperText>
                            ) : (
                                <FormErrorMessage>Se requiere de un email.</FormErrorMessage>
                            )}
                        </FormControl>
                        <FormControl isInvalid={isError}>
                            <FormLabel>Direccion</FormLabel>
                            <Input
                                type='text'
                                value={input}
                                onChange={handleInputChange}
                            />
                            {!isError ? (
                                <FormHelperText>
                                    Ingrese su direccion
                                </FormHelperText>
                            ) : (
                                <FormErrorMessage>Se requiere para hacer llegar su producto</FormErrorMessage>
                            )}
                        </FormControl>
                        <Button type='submit'>Finalizar compra</Button>
                    </Flex>
                </Box>
                <Box>
                    {
                        products.map((product) => <CardCart key={product.id} {...product} />)
                    }
                </Box>
            </Flex>
        </Box>
    )
}
