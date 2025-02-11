import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <img src="/images/logo.png" alt="logo Dulce Delicias" />
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/productos">Productos</Link></li>
                <li><Link to="/contacto">Contacto</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;