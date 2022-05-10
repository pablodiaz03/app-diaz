import { useState } from "react"

const ItemCount = (props) => {

    const [contador, setContador] = useState(1)
    const item = props.art

    const handleClick = () => {
        console.log("click del hijo")
        props.onAdd(contador)
    }

    const agregarItem = () => {
        if (contador < item.stock && item.stock > 0)
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
        // item.onAdd(contador)
        console.log(contador)
    }

  return (
    <div>
        <label>Stock: {item.stock}</label>
        <br/>
        <button onClick={restarItem}>-</button>
        <p>{contador}</p>
        <button onClick={agregarItem}>+</button>
        <br/>
        <button onClick={handleClick}>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount