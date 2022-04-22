import Navbar from "./Navbar"
import ItemListContainer from "./ItemListContainer"

const App = () => {
    const greeting="Bienvenido: Pablo Diaz"

    return (
        <>
            <Navbar/>
            <ItemListContainer greeting={greeting}/>
        </>
    )
}

export default App