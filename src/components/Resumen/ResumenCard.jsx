import { Center, Flex, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import { OrderCard } from '../OrderCard/OrderCard'

export const ResumenCard = () => {
    const { orders } = useSelector(state => state.orders)
    return (
        <Center>
            <Stack w='90%' mt='5%'>
                <Flex wrap={'wrap'} gap='10%' align={'center'} justify='space-between'>
                    {
                        orders.length ? orders.map((order) => <OrderCard key={order.id} {...order}></OrderCard>) : <Text>No tiene compras realizadas</Text>
                    }
                </Flex>
            </Stack>
        </Center>
    )
}

