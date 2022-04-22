import CartWidget from "./CartWidget"

const Navbar = () => {
  return (
    <>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#"></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
                <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">Nosotros</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">Medios de pago</a>
                </li>
                <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Catálogo
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <li><a class="dropdown-item" href="#">Notebooks</a></li>
                    <li><a class="dropdown-item" href="#">PC Armadas</a></li>
                    <li><a class="dropdown-item" href="#">Componentes</a></li>
                </ul>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#"><CartWidget/></a>
                </li>
            </ul>
            </div>
        </div>
        </nav>
        
    </>
  )
}

export default Navbar