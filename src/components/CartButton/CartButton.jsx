import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverBody,
    PopoverArrow,
    Stack,
    Flex,
} from '@chakra-ui/react';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CardCart } from '../CardCart/CardCart';




export const CartButton = () => {
    return (
        <Flex justifyContent="center">
            <Popover placement="bottom" isLazy maxH='250px' overflow='scroll' mr='5%' >
                <PopoverTrigger>
                <FontAwesomeIcon icon={faCartShopping}/>
                </PopoverTrigger>
                <PopoverContent w="fit-content" _focus={{ boxShadow: 'none' }}>
                    <PopoverArrow />
                    <PopoverBody>
                        <Stack>
                            <CardCart/>
                        </Stack>
                    </PopoverBody>
                </PopoverContent>
            </Popover>
        </Flex>
    );
}