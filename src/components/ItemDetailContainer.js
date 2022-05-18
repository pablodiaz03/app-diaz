import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"

const BD = [
    {id: 1, title: "Producto 1", precio: 1500, categoryId: "Notebooks", pictureUrl: "", stock: 10, cantidad: 0},
    {id: 2, title: "Producto 2", precio: 2500, categoryId: "Notebooks", pictureUrl: "", stock: 20, cantidad: 0},
    {id: 3, title: "Producto 3", precio: 3500, categoryId: "PCArmadas", pictureUrl: "", stock: 30, cantidad: 0},
    {id: 4, title: "Producto 4", precio: 8000, categoryId: "Componentes", pictureUrl: "", stock: 40, cantidad: 0}
  ]

const ItemDetailContainer = () => {
    const [cargando, setCargando] = useState(true)
    const [productos, setProductos] = useState([]) 
    const {id} = useParams()
    
    useEffect(() => {
        const promesa = new Promise((res) => {
            setTimeout(() => {
              res(
                  BD.filter((productos) => {
                    return productos.id == id
                })
              )
            },1000)
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