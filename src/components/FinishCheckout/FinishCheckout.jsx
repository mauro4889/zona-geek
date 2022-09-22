import { Box, Button, Heading, Text } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

export const FinishCheckout = () => {
    const {user} = useSelector(state=>state.user)
    return (
        <Box textAlign="center" py={10} px={6} mt={{base:'10em'}}>
            <CheckCircleIcon boxSize={'50px'} color={'green.500'} />
            <Heading as="h2" size="xl" mt={6} mb={2}>
                Gracias por su compra {user.name}
            </Heading>
            <Text color={'gray.500'}>
                En breve nos comunicaremos para informar el numero de seguimiento del envio
            </Text>
            <Button mt='5%'><NavLink to='/'>Ir a inicio</NavLink></Button>
        </Box>
    );
}