import { Heading, Stack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ResumenCard } from '../../components/Resumen/ResumenCard'
import { getOrders } from '../../redux/order/actionOrder'

export const Resumen = () => {
    const {orders} = useSelector(state=>state.orders)
    const {user} = useSelector(state=>state.user)
    const dispatch = useDispatch()

    useEffect(()=>{
        if(!orders.length){
            dispatch(getOrders(user?.id))
        }
    },[user?.id, dispatch, orders.length])

    return (
        <Stack>
            <Heading textAlign={'center'} mt='5%'>
                Resumen de tus compras
            </Heading>
            <ResumenCard></ResumenCard>
        </Stack>
    )
}
