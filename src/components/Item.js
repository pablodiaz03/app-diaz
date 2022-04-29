const Item = ({item}) => {

  return (
    <article>
      <h2>{item.title}</h2>
      <img src="https://via.placeholder.com/300x300" alt="card"></img>
      <p>Precio: {item.precio}</p>
      <button>Detalle</button>
    </article>
  )
}

export default Item