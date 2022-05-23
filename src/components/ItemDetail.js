import { useState, useContext } from "react"
import ItemCount from "./ItemCount"
import { contexto } from "./CartContext"

const ItemDetail = ({ item }) => {

  const [contador, setContador] = useState(0)
  const { addItem } = useContext(contexto)

  const handleClick = (contadorHijo) => {
    setContador(contadorHijo)
    console.log("clic del padre")
    addItem(item, contadorHijo)
  }

  return (
    <article>
      <h2>Detalle del artículo</h2>
      <h4>{item.title}</h4>
      <img src="https://via.placeholder.com/300x300" alt="card"></img>
      <p>Precio: {item.precio}</p>
      <strong>Unidades Pedidas: {item.cantidad}</strong>
      <ItemCount art={item} onAdd={handleClick} />
    </article>
  )
}

export default ItemDetail
