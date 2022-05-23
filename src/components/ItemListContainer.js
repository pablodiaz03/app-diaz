import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemList from "./ItemList"

const BD = [
  { id: 1, title: "Producto 1", precio: 1500, categoryId: "Notebooks", pictureUrl: "" },
  { id: 2, title: "Producto 2", precio: 2500, categoryId: "Notebooks", pictureUrl: "" },
  { id: 3, title: "Producto 3", precio: 3500, categoryId: "PCArmadas", pictureUrl: "" },
  { id: 4, title: "Producto 4", precio: 8000, categoryId: "Componentes", pictureUrl: "" }
]

const ItemListContainer = () => {

  const [productos, setProductos] = useState([])
  const { id } = useParams()

  // console.log(id)

  useEffect(() => {
    const promesa = new Promise((res) => {
      setTimeout(() => {
        if (id == undefined) {
          res(BD)
        } else {
          res(
            BD.filter((productos) => {
              // console.log(productos.categoryId == id)
              return productos.categoryId == id
            })
          )
        }
      }, 500)
    })

    promesa
      .then((res) => {
        setProductos(res)
      })
  }, [id])

  return (
    <>
      <ItemList items={productos} />
    </>

  )
}

export default ItemListContainer