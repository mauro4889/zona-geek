import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
import { CartIconStyled } from './CartIconStyle'


export const CartIcon = () => {
  return (
    <CartIconStyled>
        <FontAwesomeIcon icon={faCartShopping} className='cartIcon'/>
        <div className="notification">1</div>
    </CartIconStyled>
  )
}
