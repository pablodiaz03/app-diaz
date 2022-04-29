import { useState } from "react"

const ItemCount = (props) => {

    const [contador, setContador] = useState(props.initial)

    const agregarItem = () => {
        if (contador < props.stock && props.stock > 0)
        {
            setContador(contador + 1)
        }
    }
    
    const restarItem = () => {
        if (contador > 0)
        {
            setContador(contador - 1)
        }
    }

    const confirmar =() => {
        props.onAdd(contador)
        console.log(contador)
    }

  return (
    <div>
        <label>Stock: {props.stock}</label>
        <br/>
        <button onClick={restarItem}>-</button>
        <p>{contador}</p>
        <button onClick={agregarItem}>+</button>
        <br/>
        <button onClick={confirmar}>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount