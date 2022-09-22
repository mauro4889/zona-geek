import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Button,
    Heading,
    useColorModeValue,
    Text
} from '@chakra-ui/react';
import { createUserProfile, signIn, signInGoogle } from '../../firebase/firebase-utils';
import googleicon from '../../assets/img/googleicon.svg'
import { NavLink, useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useRedirect } from '../../hooks/useRedirect';


const ERROR_CODE = {
    WRONG_PASSWORD: 'auth/wrong-password',
    NOT_FOUND: 'auth/user-not-found'
}


export const Login = () => {
    const {state} = useLocation()
    useRedirect(state?.checkout ? 'checkout' : '/')

    const {reset, register, handleSubmit} = useForm()

    const onSubmit = async values =>{
        const {email, password} = values;
        try {
            const {user} = await signIn(email, password)
            createUserProfile(user)
        } catch (error) {
            const {code} = error
            switch(code){
                case ERROR_CODE.WRONG_PASSWORD:
                    return alert('Contraseña incorrecta')
                case ERROR_CODE.NOT_FOUND:
                    return alert('Usuario incorrecto')
                default:
                    return console.log(error)
            }
        }
        reset()
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)} >
            <Flex
                minH={'100vh'}
                align={'center'}
                justify={'center'}
                bg='none'>
                <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                    <Stack align={'center'}>
                        <Heading fontSize={'4xl'}>Ingrese a su cuenta</Heading>
                    </Stack>
                    <Box
                        rounded={'lg'}
                        bg='gray.900'
                        color='gray.50'
                        boxShadow={'lg'}
                        p={8}>
                        <Stack spacing={4}>
                            <FormControl id="email">
                                <FormLabel>Correo</FormLabel>
                                <Input type="email"  {...register('email',{requiered: true})} />
                            </FormControl>
                            <FormControl id="password">
                                <FormLabel>Contraseña</FormLabel>
                                <Input type="password" {...register('password',{requiered: true})} />
                            </FormControl>
                            <Stack spacing={5}>
                                <Stack
                                    direction={{ base: 'column' }}
                                    align={'start'}
                                    justify={'space-between'}>
                                    <Checkbox>Recuerdame</Checkbox>
                                    <NavLink to='/forgotpassword'><Text color={'blue.400'}>¿Olvido la contraseña?</Text></NavLink>
                                    <NavLink to='/createacount'><Text color={'blue.400'}>¿No tiene cuenta?</Text></NavLink>
                                </Stack>
                                <Box>
                                    <Button onClick={e => {
                                        signInGoogle()
                                    }}>
                                        <img src={googleicon} />
                                    </Button>
                                </Box>
                                <Button
                                    bg={'blue.400'}
                                    color={'white'}
                                    _hover={{
                                        bg: 'blue.500',
                                    }}
                                    type='submit'>
                                    Iniciar sesion
                                </Button>
                            </Stack>
                        </Stack>
                    </Box>
                </Stack>
            </Flex>
        </form>

    );
}