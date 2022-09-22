import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    InputGroup,
    InputLeftElement,
    Stack,
    Textarea,
    useClipboard,
    useColorModeValue,
    VStack,
} from '@chakra-ui/react';
import React from 'react';
import { BsPerson } from 'react-icons/bs';
import { MdOutlineEmail } from 'react-icons/md';
import { NavLink } from 'react-router-dom';


export const Contact = () => {
    const { hasCopied, onCopy } = useClipboard('example@example.com');

    return (
        <Flex
            align="center"
            justify="center"
            maxH='50em'
            id="contact">
            <Box
                borderRadius="lg"
                p={{ base: 5, lg: 16 }}
                mt={{base:'10em'}}>
                <Box>
                    <VStack spacing={{ base: 4, md: 8, lg: 20 }}>
                        <Heading
                            fontSize={{
                                base: '4xl',
                                md: '5xl',
                            }}
                            textAlign='center'>
                            Envianos tus dudas
                        </Heading>
                        <Stack
                            spacing={{ base: 4, md: 8, lg: 20 }}
                            direction={{ base: 'column', md: 'row' }}
                            m='auto'>
                            <Box
                                bg={useColorModeValue('white', 'gray.700')}
                                borderRadius="lg"
                                p={8}
                                color={useColorModeValue('gray.700', 'whiteAlpha.900')}
                                shadow="base">
                                <VStack spacing={5}>
                                    <FormControl isRequired>
                                        <FormLabel>Nombre</FormLabel>
                                        <InputGroup>
                                            <InputLeftElement children={<BsPerson />} />
                                            <Input type="text" name="name" placeholder="Tu nombre" />
                                        </InputGroup>
                                    </FormControl>
                                    <FormControl isRequired>
                                        <FormLabel>Email</FormLabel>
                                        <InputGroup>
                                            <InputLeftElement children={<MdOutlineEmail />} />
                                            <Input
                                                type="email"
                                                name="email"
                                                placeholder="Tu Email"
                                            />
                                        </InputGroup>
                                    </FormControl>
                                    <FormControl isRequired>
                                        <FormLabel>Mensaje</FormLabel>
                                        <Textarea
                                            name="message"
                                            placeholder="Escribe tu mensaje"
                                            rows={6}
                                            resize="none"
                                        />
                                    </FormControl>
                                    <NavLink to='/contactconfirm'>
                                        <Button
                                            type='submit'
                                            colorScheme="blue"
                                            bg="blue.400"
                                            color="white"
                                            _hover={{
                                                bg: 'blue.500',
                                            }}
                                            isFullWidth>
                                            Enviar mensaje
                                        </Button>
                                    </NavLink>
                                </VStack>
                            </Box>
                        </Stack>
                    </VStack>
                </Box>
            </Box>
        </Flex>
    );
}