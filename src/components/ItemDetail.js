
const ItemDetail = ({item}) => {console.log(item)
  return (
    <article>
    <h2>Detalle del artículo</h2>
    <h4>{item.title}</h4>
    <img src="https://via.placeholder.com/300x300" alt="card"></img>
    <p>Precio: {item.precio}</p>
  </article>
  )
}

export default ItemDetail
