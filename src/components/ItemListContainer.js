import ItemCount from "./ItemCount"

const ItemListContainer = (props) => {
const variable = () => {}

  return (
    <div>
      {props.greeting}
      <ItemCount stock={5} initial={1} onAdd={variable}/>
    </div>

  )
}

export default ItemListContainer