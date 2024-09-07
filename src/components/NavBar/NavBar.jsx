import "./NavBar.css";
import CardWidget from "../cardWidget/cardWidget";
import logo from "../../assets/descarga.png"

function NavBar () {
    return (
        <nav className="navBar" >
            <div>
            <img className= "logo" src={logo} alt="logo de la tienda" />
            </div>
            <ul className="links">
                <li className="navbar-item">
                    <a href="#">Home</a>
                </li>
                <li className="navbar-item">
                    <a href="#">Verano</a>
                </li>
                <li className="navbar-item">
                    <a href="#">Invierno</a>
                </li>
            </ul>
            <CardWidget/>
        </nav>
    )
}

export default NavBar