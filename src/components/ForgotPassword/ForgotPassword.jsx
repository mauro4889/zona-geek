import {
    Button,
    FormControl,
    Flex,
    Heading,
    Input,
    Stack,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { resetPassword } from '../../firebase/firebase-utils';
import { useRedirect } from '../../hooks/useRedirect';

const ERROR_TYPE = {
    NOT_FOUND: 'auth/user-not-found'
}

export const ForgotPassword = () => {
    const {reset, register, handleSubmit} = useForm()

    useRedirect('/')
    
    const onSubmit = async values =>{
        try {
            await resetPassword(values.email)
        } catch (error) {
            switch(error.code){
                case ERROR_TYPE.NOT_FOUND:
                    return alert('No existe usuario con ese correo')
            }
        }
        reset()
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Flex
                minH={'100vh'}
                align={'center'}
                justify={'center'}
                bg={useColorModeValue('gray.50', 'gray.800')}>
                <Stack
                    spacing={4}
                    w={'full'}
                    maxW={'md'}
                    bg={useColorModeValue('white', 'gray.700')}
                    rounded={'xl'}
                    boxShadow={'lg'}
                    p={6}
                    my={12}>
                    <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
                        ¿Olvidaste la contraseña?
                    </Heading>
                    <Text
                        fontSize={{ base: 'sm', sm: 'md' }}
                        color={useColorModeValue('gray.800', 'gray.400')}>
                        Recibiras un mail para recuperar tu contraseña
                    </Text>
                    <FormControl id="email">
                        <Input
                            placeholder="tu-email@ejemplo.com"
                            _placeholder={{ color: 'gray.500' }}
                            type="email"
                            {...register('email',{requiered: true})}
                        />
                    </FormControl>
                    <Stack spacing={6}>
                        <Button
                            bg={'blue.400'}
                            color={'white'}
                            _hover={{
                                bg: 'blue.500',
                            }}>
                            Recuperar contraseña
                        </Button>
                    </Stack>
                </Stack>
            </Flex>
        </form>

    );
}