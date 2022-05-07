import CartWidget from "./CartWidget"
import {Link, NavLink} from "react-router-dom"

const Navbar = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <a className="navbar-brand" href="#"></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
                <li className="nav-item">
                <NavLink to="/" className="nav-link active" aria-current="page">Home</NavLink>
                </li>
                <li className="nav-item">
                <NavLink to="/category/Notebooks" className="nav-link">Notebooks</NavLink>
                </li>
                <li className="nav-item">
                <NavLink to="/category/PCArmadas" className="nav-link">PC Armadas</NavLink>
                </li>
                <li className="nav-item">
                <NavLink to="/category/Componentes" className="nav-link">Componentes</NavLink>
                </li>
                {/* <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Catálogo
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <li><a className="dropdown-item" href="#">Notebooks</a></li>
                    <li><a className="dropdown-item" href="#">PC Armadas</a></li>
                    <li><a className="dropdown-item" href="#">Componentes</a></li>
                </ul>
                </li> */}
                <li className="nav-item">
                <NavLink to="/" className="nav-link" href="#"><CartWidget/></NavLink>
                </li>
            </ul>
            </div>
        </div>
        </nav>
        
    </>
  )
}

export default Navbar