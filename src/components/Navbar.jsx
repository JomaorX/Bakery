import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav class="navbar">
        <div class="logo">
            <img src="images/logo.png" alt="logotipo"/>
        </div>
        <ul>
        <li><Link to="/">Inicio</Link></li>
                <li><Link to="/productos">Productos</Link></li>
                <li><Link to="/contacto">Contacto</Link></li>
        </ul>
    </nav>
    );
}

export default Navbar;