import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
    Button,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import {  agregarCart } from '../../redux/cart/actionCart';
import { formatPrice } from '../../utils/formatPrice';


export const Card = ({title, desc, price, category, img, id}) => {
    const dispatch = useDispatch()
    const {user} = useSelector(state=>state.user)
    const navigate = useNavigate()

    const handleSubmit = () =>{
        if(user){
            dispatch(agregarCart({title, desc, price, category, img, id}))
        }else{
            navigate('/login')
        }
            
    }

    return (
        <Center py={12}>
            <Box
                role={'group'}
                p={6}
                maxW={'300px'}
                maxH={'40em'}
                h={'full'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow={'2xl'}
                rounded={'lg'}
                pos={'relative'}
                zIndex={1}>
                <Box
                    rounded={'lg'}
                    mt={-12}
                    pos={'relative'}
                    height={'230px'}
                    overflow='hidden'
                    _after={{
                        transition: 'all .3s ease',
                        content: '""',
                        w: 'full',
                        h: 'full',
                        pos: 'absolute',
                        top: 5,
                        left: 0,
                        filter: 'blur(15px)',
                        zIndex: -1,
                    }}
                    _groupHover={{
                        _after: {
                            filter: 'blur(20px)',
                        },
                    }}>
                    <Image
                        rounded={'lg'}
                        height={'100%'}
                        width={'100%'}
                        m='auto'
                        mt='20%'
                        objectFit={'fixed'}
                        src={img}
                    />
                </Box>
                <Stack pt={10} align={'center'}>
                    <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                        {title}
                    </Text>
                    <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                        {desc}
                    </Heading>
                    <Stack direction={'row'} align={'center'}>
                        <Text fontWeight={800} fontSize={'xl'}>
                            {formatPrice(price)}
                        </Text>
                    </Stack>
                    <Button onClick={handleSubmit} backgroundColor={'black'} color={'white'}>COMPRAR</Button>
                </Stack>
            </Box>
        </Center>
    );
}