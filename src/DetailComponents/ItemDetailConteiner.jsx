import { Link } from "react-router-dom";
import prendas from "../productos";
import './items.css';

function ItemDetailContainer() {
    return (
        <div>
            <h1>Todos los Productos</h1>
            <div id="card-container">
                {prendas.map((producto) => (
                    <div className="card" key={producto.id}>
                        <Link to={`/detail/${producto.id}`}>
                            <h2 className="card-title">{producto.nombre}</h2>
                            <p className="card-price">Precio: ${producto.precio}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}


export default ItemDetailContainer;
