import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    useColorModeValue,
    Text
} from '@chakra-ui/react';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../firebase/firebase-utils';
import googleicon from '../../assets/img/googleicon.svg'
import { NavLink } from 'react-router-dom';




export const Login = () => {

    const handleOnClick = async () => {
        const googleProvider = new GoogleAuthProvider();
        await signInWithGoogle(googleProvider)

        const signInWithGoogle = async (googleProvider) => {
            try {
                const res = await signInWithPopup(auth, googleProvider)
            } catch (error) {
                console.log(error)
            }
        }
    }



    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'}>Ingrese a su cuenta</Heading>
                </Stack>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}>
                    <Stack spacing={4}>
                        <FormControl id="email">
                            <FormLabel>Correo</FormLabel>
                            <Input type="email" />
                        </FormControl>
                        <FormControl id="password">
                            <FormLabel>Contraseña</FormLabel>
                            <Input type="password" />
                        </FormControl>
                        <Stack spacing={5}>
                            <Stack
                                direction={{ base: 'column'}}
                                align={'start'}
                                justify={'space-between'}>
                                <Checkbox>Recuerdame</Checkbox>
                                <Link color={'blue.400'}>¿Olvido la contraseña?</Link>
                                <NavLink to='/createacount' color={'blue.400'}><Text color={'blue.400'}>¿No tiene cuenta?</Text></NavLink>
                            </Stack>
                            <Box>
                                <Button onClick={handleOnClick}>
                                    <img src={googleicon}/>
                                </Button>
                            </Box>
                            <Button
                                bg={'blue.400'}
                                color={'white'}
                                _hover={{
                                    bg: 'blue.500',
                                }}>
                                Iniciar sesion
                            </Button>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    );
}