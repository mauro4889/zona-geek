import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion'
import React from 'react'
import { MenuStyled } from './MenuStyle'
import IconStyled from './MenuStyle'

const openMenu = {
    hidden: {
        opacity: 0
    },
    show: {
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: 'easeInOut'
        }
    }
}


export const Menu = (props) => {
    return (
        <MenuStyled>
            <motion.div
                variants={openMenu}
                animate={props.open ? 'hidden' : 'show'}>
                <IconStyled>
                    <FontAwesomeIcon icon={faBars} className='barsMenu' onClick={() => props.setOpen(!props.open)} />
                </IconStyled>
            </motion.div>
            <motion.div
            variants={openMenu}
            animate={props.open ? 'show' : 'hidden'}>
                <IconStyled>
                    <FontAwesomeIcon icon={faXmark} className='xmarkMenu' onClick={() => props.setOpen(!props.open)} />
                </IconStyled>
            </motion.div>
        </MenuStyled>
    )
}
