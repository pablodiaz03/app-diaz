import React from 'react'
import { useContext } from 'react'
import { contexto } from './CartContext'
import { NavLink } from "react-router-dom"

const Cart = () => {

  const { precio_total, carrito, removeItem } = useContext(contexto)

  const handleClick = (id) => {
    console.log(id)
    removeItem(id)
  }


  if (precio_total == 0) {
    return (
      <div>
        <h3>Carrito vacío</h3>
        <button><NavLink to={"/"}>Volver a catálogo</NavLink></button>
      </div>
    )
  } else {
    return (
      <div>
        <h3>Carrito</h3>
        <h5>Precio Total: $ {precio_total}</h5>
        <hr></hr>
        <div className="container">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Codigo</th>
                <th scope="col">Descripción</th>
                <th scope="col">Precio</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Importe Total</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {
                carrito.map((item) => {
                  return (
                    <tr>
                      <th scope="row">{item.id}</th>
                      <td>{item.title}</td>
                      <td>$ {item.precio}</td>
                      <td>{item.cantidad}</td>
                      <td>{(item.precio * item.cantidad)}</td>
                      {/* <td><button onClick={handleClick(item.id)}>Eliminar</button></td> */}
                      <td><button>Eliminar</button></td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default Cart