import "./navbar.css";
import CardWidget from "../cardWidget/cardWidget";
import logo from "../../assets/descarga.png";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav className="navBar">
            <div>
                <img className="logo" src={logo} alt="logo de la tienda" />
            </div>
            <ul className="links">
                <li className="navbar-item">
                    <Link to="/">Inicio</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/verano">Verano</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/invierno">Invierno</Link>
                </li>
            </ul>
            <Link to="/checkout">
                <CardWidget />
            </Link>
        </nav>
    );
}

export default NavBar;

