import { Box, Button, Divider, Flex, FormControl, FormErrorMessage, FormHelperText, FormLabel, Input, Stack, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { createOrder } from '../../redux/order/actionOrder'
import { CardCart } from '../CardCart/CardCart'
import { v4 } from 'uuid';
import { ArrowBackIcon, DeleteIcon } from '@chakra-ui/icons'
import { Spinner } from '@chakra-ui/react'
import { limpiarCart } from '../../redux/cart/actionCart'
import { ScrollButton } from '../ScrollButton/ScrollButton'

export const CheckOut = () => {
    const { reset, register, handleSubmit, isSubmitting } = useForm()

    const navigate = useNavigate()

    const { products, total } = useSelector((state) => state.carrito)
    const { user } = useSelector((state) => state.user)
    const dispatch = useDispatch()

    const onSubmit = async values => {
        const order = {
            user: user.id,
            products,
            total,
            id: v4()
        }
        await dispatch(createOrder(order))
        dispatch(limpiarCart())
        navigate('/finishorder')
        reset()
    }


    return (
        <Box p='5%'>
            <NavLink to='/'>
                <Button
                    mt='5%'
                    mb='5%'
                    bg='gray.900'
                    color='gray.50'
                    _hover={{ bg: 'gray.50', color: 'gray.900' }}
                    leftIcon={<ArrowBackIcon />} fontSize='xl'>Seguir comprando</Button>
            </NavLink>
            <Text>{user.name}</Text>
            <Flex gap='10%' wrap='wrap' justify='space-between' >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Stack>
                        <FormControl isRequired>
                            <FormLabel>Nombre</FormLabel>
                            <Input borderColor={'black'} type='text' {...register('nombre', { requiered: { value: true, message: 'Ingresa tu nombre' } })}></Input>
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Telefono</FormLabel>
                            <Input borderColor={'black'} type='number' {...register('direccion', { requiered: true })}></Input>
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Dirección</FormLabel>
                            <Input borderColor={'black'} type='text' {...register('telefono', { requiered: true })}></Input>
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Localidad</FormLabel>
                            <Input borderColor={'black'} type='text' {...register('localidads', { requiered: true })}></Input>
                        </FormControl>
                        <Button isDisabled={!products.length} spinner='true' bg='black' color='white' type='submit' value='submit' _hover={{ color: 'black', bg: 'white' }}> {isSubmitting && <Spinner />} Finalizar compra</Button>
                    </Stack>
                </form>
                <Box mr={{ lg: '10%' }} mt={{ sm: '15%', lg: '0', xl:'-8%' }}>
                    <Flex wrap='wrap' direction='column'>
                        <Button
                            w='10em'
                            leftIcon={<DeleteIcon />}
                            onClick={() => dispatch(limpiarCart())}
                            bg={'blue.400'}
                            _hover={{
                                bg: 'blue.500',
                            }}
                            _focus={{
                                bg: 'blue.500',
                            }}
                            isDisabled={!products.length}
                            >Limpiar carrito</Button>
                        <Text fontWeight='bold'>Total: ${total}</Text>
                        {
                            products.map((product) => <CardCart key={product.id} {...product} />)
                        }
                    </Flex>
                </Box>
                    <ScrollButton />
            </Flex>
        </Box>
    )
}
