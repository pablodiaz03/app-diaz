import { NavLink } from "react-router-dom"

const Item = ({item}) => {

  return (
    <article>
      <h2>{item.title}</h2>
      <img src="https://via.placeholder.com/300x300" alt="card"></img>
      <h6>Categoría: {item.categoryId}</h6>
      <p>Precio: {item.precio}</p>
      <button><NavLink to={"/item/" + item.id}>Detalle</NavLink></button>
    </article>
  )
}

export default Item