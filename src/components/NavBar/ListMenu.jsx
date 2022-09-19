import React from 'react'
import { ListStyled } from './ListStyle'
import { motion } from 'framer-motion'

const showList = {
    hidden: {
        top: '-100vh',
        transition: {
            duration: 0.8,
            ease: 'easeInOut'
        }
    },
    show: {
        top: '5em',
        transition: {
            duration: 0.8,
            ease: 'easeInOut'
        }
    }
}
export const ListMenu = (props) => {
    return (
        <ListStyled>
            <motion.ul
                variants={showList}
                animate={props.open ? 'show' : 'hidden'}
                className='listMenu'>
                <li>Inicio</li>
                <li>Categoria</li>
                <li>Contacto</li>
                <li>Login</li>
            </motion.ul>
        </ListStyled>

    )
}
