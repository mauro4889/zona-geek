import {
    Box,
    Center,
    Heading,
    Text,
    Stack,
    useColorModeValue,
    Image,
} from '@chakra-ui/react';
import { Timestamp } from 'firebase/firestore';
import resumenimg from '../../assets/img/resumen/resumenimg.jpg'

export const OrderCard = ({ total, createdOrderDate, id }) => {
    const createdAtDate = new Timestamp(
        createdOrderDate.seconds,
        createdOrderDate.nanoseconds
    ).toDate()
    return (
        <Center w='20%' h='20%' py={6}>
            <Box
                maxW={'445px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.900')}
                boxShadow={'2xl'}
                rounded={'md'}
                p={6}
                overflow={'hidden'}>
                <Box
                    h={'210px'}
                    bg={'gray.100'}
                    mt={-6}
                    mx={-6}
                    mb={6}
                    pos={'relative'}>
                    <Image
                        src={resumenimg}
                        layout={'fill'}
                    />
                </Box>
                <Stack>
                    <Text
                        color={'green.500'}
                        textTransform={'uppercase'}
                        fontWeight={800}
                        fontSize={'sm'}
                        letterSpacing={1.1}>
                        Numero de orden {id}
                    </Text>
                    <Heading
                        color={useColorModeValue('gray.700', 'white')}
                        fontSize={'2xl'}
                        fontFamily={'body'}>
                        Total: ${total}
                    </Heading>
                    <Text color={'gray.500'}>
                    </Text>
                </Stack>
            </Box>
        </Center>
    );
}