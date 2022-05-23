import { createContext, useState, useEffect } from "react"

export const contexto = createContext()

const {/* Consumer, */ Provider } = contexto

const CartContext = ({ children }) => {

    const [carrito, setCarrito] = useState([])
    const [cantidad_total, setCantidad_total] = useState(0)
    const [precio_total, setPrecio_total] = useState(0)

    const addItem = (producto, cantidad) => {
        if (isInCart(producto)) {
            const newCart = [...carrito]
            for (const elemento of newCart) {
                if (elemento.id === producto.id) {
                    // elemento.cantidad = elemento.cantidad + cantidad
                    elemento.cantidad = cantidad
                }
            }
            // setCarrito(newCart) 
            console.log(newCart)
            console.log("existe")

        } else {
            producto.cantidad = cantidad
            setCarrito([...carrito, producto])
            console.log("NO existe")

        }

        console.log(carrito)
        // setCantidad_total(cantidad_total + cantidad)
        // setPrecio_total(precio_total + (producto.precio * cantidad))
        calcularCantidad(carrito)
        calcularPrecioTotal(carrito)
    }

    useEffect(() => {
        calcularCantidad(carrito)
        calcularPrecioTotal(carrito)
    }, [carrito])

    const removeItem = (id) => {
        const newCart = [...carrito].filter(elemento => elemento.id !== id)
        setCarrito(newCart)
    }

    const clear = () => {
        setCarrito([])
    }

    const isInCart = (producto) => {
        return carrito.some(e => e.id == producto.id)
    }

    const calcularCantidad = (carr) => {
        setCantidad_total(carr.reduce((acumulador, producto) => acumulador + producto.cantidad, 0))
    }

    const calcularPrecioTotal = (carr) => {
        setPrecio_total(carr.reduce((acumulador, producto) => acumulador + (producto.precio * producto.cantidad), 0))
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
        <Provider value={valorDelContexto} >
            {children}
        </Provider>
    )
}

export default CartContext