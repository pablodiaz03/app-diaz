import {createContext, useState} from "react"

export const contexto = createContext()

const {/* Consumer, */ Provider} = contexto

const CartContext = ({children}) => {

    const [carrito, setCarrito] = useState([])
    const [cantidad_total, setCantidad_total] = useState(0)
    const [precio_total, setPrecio_totall] = useState(0)

    const addItem = (producto, cantidad) => {
        if(isInCart(producto)){
            const newCart = [...carrito]
            for (const elemento of newCart) {
                if (elemento.id === producto.id){
                    elemento.cantidad = elemento.cantidad + cantidad
                }
            }
            // setCarrito(newCart) 
            console.log(newCart)
            console.log("existe")

        }else{
            producto.cantidad = cantidad
            setCarrito([...carrito,producto])
            console.log("NO existe")

        }

        setCantidad_total(cantidad_total + cantidad)
    }

    const removeItem = (id) => {
        const newCart = [...carrito].map(elemento => elemento.id !== id)
        setCarrito(newCart)
    }

    const clear = () =>{
        setCarrito([])
    }

    const isInCart = (producto) => {
        return carrito.some(e => e.id == producto.id)
    }

    const valorDelContexto = {
        cantidad_total,
        precio_total,
        carrito,
        addItem,
        removeItem,
        clear,
        isInCart
    }

    return (
        <Provider value = {valorDelContexto} >
            {children}
        </Provider>
    )
}

export default CartContext