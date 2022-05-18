import Navbar from "./Navbar"
import ItemListContainer from "./ItemListContainer"
import ItemDetailContainer from "./ItemDetailContainer"
import Cart from "./Cart"
import {BrowserRouter} from "react-router-dom" 
import {Routes, Route} from "react-router-dom"
import CartContext from "./CartContext"

const App = () => {
    const greeting="Bienvenido: Pablo Diaz"

    return (
        <BrowserRouter>
            <CartContext>
                <Navbar/>
                {/* <ItemListContainer/>
                <ItemDetailContainer/> */}
                <Routes>
                    <Route path="/" element={<ItemListContainer/>}/>
                    <Route path="/category/:id" element={<ItemListContainer/>}/>
                    <Route path="/item/:id" element={<ItemDetailContainer/>}/>
                    <Route path="/Cart" element={<Cart/>}/>
                </Routes>
            </CartContext>
        </BrowserRouter>
    )
}

export default App