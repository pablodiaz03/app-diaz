import React from 'react'
import { useContext } from 'react'
import { contexto } from './CartContext'

const Cart = () => {

  const {precio_total, carrito} = useContext(contexto)  

  return (
    <div>
      <h3>Carrito</h3>
      <h5>Precio Total: $ {precio_total}</h5>
    </div>
  )
}

export default Cart