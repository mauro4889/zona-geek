import { Box, Button, Heading, Text } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';
import { NavLink } from 'react-router-dom';

export const Confirmation = () => {
    return (
        <Box textAlign="center" py={10} px={6} mt={{base:'10em'}}>
            <CheckCircleIcon boxSize={'50px'} color={'green.500'} />
            <Heading as="h2" size="xl" mt={6} mb={2}>
                Gracias por comuinicarte con nosotros
            </Heading>
            <Text color={'gray.500'}>
                En la brevedad nos comunicaremos con usted. Muchas gracias
            </Text>
            <NavLink to='/'><Button>Ir a inicio</Button></NavLink>
        </Box>
    );
}