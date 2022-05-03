import Navbar from "./Navbar"
import ItemListContainer from "./ItemListContainer"
import ItemDetailContainer from "./ItemDetailContainer"
const App = () => {
    const greeting="Bienvenido: Pablo Diaz"

    return (
        <>
            <Navbar/>
            <ItemListContainer/>
            <ItemDetailContainer/>
        </>
    )
}

export default App