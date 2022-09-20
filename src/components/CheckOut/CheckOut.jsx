import { Box, Button, Divider, Flex, FormControl, FormErrorMessage, FormHelperText, FormLabel, Input, Stack, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { createOrder } from '../../redux/order/actionOrder'
import { CardCart } from '../CardCart/CardCart'
import { v4 } from 'uuid';
import { ArrowBackIcon } from '@chakra-ui/icons'

export const CheckOut = () => {
    const {reset, register, handleSubmit} = useForm()

    const navigate = useNavigate()

    const {products, total} = useSelector((state)=>state.carrito)
    const {user} = useSelector((state)=>state.user)
    const dispatch = useDispatch()

    const onSubmit = async values =>{
        const order = {
            user: user.id,
            products,
            total,
            id: v4()
        }
        dispatch(createOrder(order))
        navigate('/finishorder')
        reset()
    }

    return (
        <Box p='5%'>
            <NavLink to='/'>
                <Button bg='none' mb='5%' leftIcon={<ArrowBackIcon/>} fontSize='xl'>Seguir comprando</Button>
            </NavLink>            
            <Text>{user.name}</Text>
            <Flex gap='10%' wrap='wrap' justify='space-between' >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Stack>
                        <FormControl>
                            <FormLabel>Nombre</FormLabel>
                            <Input borderColor={'black'} type='text' {...register('nombre',{requiered: true})}></Input>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Telefono</FormLabel>
                            <Input borderColor={'black'} type='number' {...register('direccion',{requiered: true})}></Input>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Dirección</FormLabel>
                            <Input borderColor={'black'} type='text' {...register('telefono',{requiered: true})}></Input>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Localidad</FormLabel>
                            <Input borderColor={'black'} type='text' {...register('localidads',{requiered: true})}></Input>
                        </FormControl>
                        <Button bg='black' color='white' type='submit' _hover={{color:'black', bg:'white'}}>Finalizar compra</Button>
                    </Stack>
                </form>
                <Box maxW='50%'>
                    {
                        products.map((product) => <CardCart key={product.id} {...product} />)
                    }
                    <Text fontWeight='bold'>Total: ${total}</Text>
                </Box>
            </Flex>
        </Box>
    )
}
