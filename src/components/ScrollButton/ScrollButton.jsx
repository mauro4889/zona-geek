import { ArrowUpIcon } from '@chakra-ui/icons';
import { Button, Icon } from '@chakra-ui/react';
import React, { useState } from 'react'

export const ScrollButton = () => {
    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        console.log(scrolled)
        if (scrolled > 300) {
            setVisible(true)
        }
        else if (scrolled <= 300) {
            setVisible(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    window.addEventListener('scroll', toggleVisible)

    return (
        <Button 
        position='fixed' 
        top={{sm:'30em', lg:'32em', xl:'50em'}}
        left={{sm:'85%', lg:'92%'}} 
        bg='gray.900' 
        color='gray.50' 
        _hover={{color:'gray.900', bg:'gray.50'}} 
        isDisabled={!visible} 
        onClick={scrollToTop}>
        <Icon as={ArrowUpIcon} /></Button>
    )
}
