import React from 'react'
import { useContext } from 'react'
import { contexto } from './CartContext'

const CartWidget = () => {

  const {cantidad_total} = useContext(contexto)  

  return (
    <>
    <span className="material-icons" id="logo">shopping_cart</span>
    <span>{cantidad_total}</span>
    </>
  )
}

export default CartWidget