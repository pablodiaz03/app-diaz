import Navbar from "./Navbar"
import ItemListContainer from "./ItemListContainer"
import ItemDetailContainer from "./ItemDetailContainer"
import {BrowserRouter} from "react-router-dom" 
import {Routes, Route} from "react-router-dom"

const App = () => {
    const greeting="Bienvenido: Pablo Diaz"

    return (
        <BrowserRouter>
            <Navbar/>
            {/* <ItemListContainer/>
            <ItemDetailContainer/> */}
            <Routes>
                <Route path="/" element={<ItemListContainer/>}/>
                <Route path="/category/:id" element={<ItemListContainer/>}/>
                <Route path="/item/:id" element={<ItemDetailContainer/>}/>
                {/* <Route path="/carrito" element={}/> */}
            </Routes>
        </BrowserRouter>
    )
}

export default App