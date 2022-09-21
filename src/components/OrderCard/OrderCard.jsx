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
import { useEffect } from 'react';
import { useState } from 'react';
import resumenimg from '../../assets/img/resumen/resumenimg.jpg'

export const OrderCard = ({ total, createdOrderDate, id }) => {
    const [date, setDate] = useState('')

    const createdDate = new Timestamp(
        createdOrderDate.seconds,
        createdOrderDate.nanoseconds
    ).toDate()

    useEffect(()=>{setDate(createdDate)},[])

    return (
        <Center w={{sm:'30%', md:'25%', lg:'20%'}} h='20%' py={6}>
            <Box
                maxW={'445px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.900')}
                boxShadow={'2xl'}
                rounded={'md'}
                p={6}
                overflow={'hidden'}>
                <Box
                    h={'10%'}
                    bg={'gray.100'}
                    mt={-6}
                    mx={-6}
                    mb={0}
                    pos={'relative'}>
                    <Image
                        src={resumenimg}
                        layout={'fill'}
                    />
                </Box>
                <Stack>
                    <Text
                        color='black'
                        textTransform={'uppercase'}
                        fontWeight={800}
                        fontSize={'sm'}
                        letterSpacing={1.1}>
                        Numero de orden {id}
                    </Text>
                    <Heading
                        color={'black'}
                        fontSize={'2xl'}
                        fontFamily={'body'}>
                        Total: ${total}
                    </Heading>
                    <Text color={'black'}>
                        {createdDate}
                    </Text>
                </Stack>
            </Box>
        </Center>
    );
}