import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"

const BD = [
    {id: 1, title: "Producto 1", precio: 1500, pictureUrl: ""},
    {id: 2, title: "Producto 2", precio: 2500, pictureUrl: ""},
    {id: 3, title: "Producto 3", precio: 3500, pictureUrl: ""},
    {id: 4, title: "Producto 4", precio: 8000, pictureUrl: ""}
  ]

const ItemDetailContainer = () => {
    const [cargando, setCargando] = useState(true)
    const [productos, setProductos] = useState([]) 

    useEffect(() => {
        const promesa = new Promise((res) => {
            setTimeout(() => {
              res(BD)
            },2000)
        })
    
        promesa
        .then((res) => {
            setCargando(false)
            setProductos(res)
        })
      },[])
  
    if(cargando){
        return (
            <p>Cargando...</p>
        )
    }    
    else{
        return(  
            <ItemDetail item={productos[0]}/>    
        )

    }
}

export default ItemDetailContainer