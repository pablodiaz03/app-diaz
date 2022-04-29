import { useEffect, useState } from "react"
import ItemList from "./ItemList"

const BD = [
  {id: 1, title: "Producto 1", precio: 1500, pictureUrl: ""},
  {id: 2, title: "Producto 2", precio: 2500, pictureUrl: ""},
  {id: 3, title: "Producto 3", precio: 3500, pictureUrl: ""},
  {id: 4, title: "Producto 4", precio: 8000, pictureUrl: ""}
]

const ItemListContainer = () => {

  const [productos, setProductos] = useState([]) 

  useEffect(() => {
    const promesa = new Promise((res) => {
        setTimeout(() => {
          res(BD)
        },2000)
    })

    promesa
    .then((res) => {
      setProductos(res)
    })
  },[])

    return (
      <>
        <ItemList items={productos}/>
      </>
  
    )
  }

export default ItemListContainer