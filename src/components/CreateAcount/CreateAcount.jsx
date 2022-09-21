import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import {  NavLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { createUser, resetPassword } from '../../firebase/firebase-utils';
import { useRedirect } from '../../hooks/useRedirect';

const ERROR_CODES ={
    EMAIL_IN_USE: 'auth/email-already-in-use'
}

export const CreateAcount = () => {
    const [showPassword, setShowPassword] = useState(false);
    const {reset, register, handleSubmit} = useForm()
    useRedirect('/')

    const onSubmit = async (values) =>{
        const {email, name, lastname, password} = values
        try {
            await createUser(email, password, name, lastname)
            console.log(name)
        } catch (error) {
            if (error.code === ERROR_CODES.EMAIL_IN_USE)
            alert('Ya existe una cuenta con ese email')
            reset()
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} >
            <Flex
                minH={'100vh'}
                align={'center'}
                justify={'center'}
                bg={useColorModeValue('gray.50', 'gray.800')}>
                <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                    <Stack align={'center'}>
                        <Heading fontSize={'4xl'} textAlign={'center'}>
                            Crear Cuenta
                        </Heading>
                        <Text fontSize={'lg'} color={'gray.600'}>
                            para disfrutar de todas nuestras características geniales ✌️
                        </Text>
                    </Stack>
                    <Box
                        rounded={'lg'}
                        bg={useColorModeValue('white', 'gray.700')}
                        boxShadow={'lg'}
                        p={8}>
                        <Stack spacing={4}>
                            <HStack>
                                <Box>
                                    <FormControl id="firstName" isRequired>
                                        <FormLabel>Nombre</FormLabel>
                                        <Input type="text" {...register('name',{requiered: true})} />
                                    </FormControl>
                                </Box>
                                <Box>
                                    <FormControl id="lastName">
                                        <FormLabel>Apellido</FormLabel>
                                        <Input type="text" {...register('lastname',{required: true})} />
                                    </FormControl>
                                </Box>
                            </HStack>
                            <FormControl id="email" isRequired>
                                <FormLabel>Email</FormLabel>
                                <Input type="email" {...register('email', {required: true})} />
                            </FormControl>
                            <FormControl id="password" isRequired>
                                <FormLabel>Contraseña</FormLabel>
                                <InputGroup>
                                    <Input type={showPassword ? 'text' : 'password'} {...register('password',{requiered: true})} />
                                    <InputRightElement h={'full'}>
                                        <Button
                                            variant={'ghost'}
                                            onClick={() =>
                                                setShowPassword((showPassword) => !showPassword)
                                            }>
                                            {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                            </FormControl>
                            <Stack spacing={10} pt={2}>
                                <Button
                                    type='submit'
                                    loadingText="Submitting"
                                    size="lg"
                                    bg={'blue.400'}
                                    color={'white'}
                                    _hover={{
                                        bg: 'blue.500',
                                    }}>
                                    Crear cuenta
                                </Button>
                            </Stack>
                            <Stack pt={6}>
                                <Text align={'center'}>
                                    ¿Ya tiene usuario? <NavLink to='/login'><Text color={'blue.400'}>Iniciar sesion</Text></NavLink>
                                </Text>
                            </Stack>
                        </Stack>
                    </Box>
                </Stack>
            </Flex>
        </form>
    );
}