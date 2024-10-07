import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './items.css';
import prendas from "../productos";

function ItemDetailContainer() {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProductos = new Promise((resolve) => {
            setTimeout(() => {
                resolve(prendas);
            }, 2000);
        });

        fetchProductos.then((data) => {
            setProductos(data);
            setLoading(false); 
        });
    }, []); 

    if (loading) {
        return <h2>Cargando productos...</h2>;
    }

    return (
        <div>
            <h1>Todos los Productos</h1>
            <div id="card-container">
                {productos.map((producto) => (
                    <div className="card" key={producto.id}>
                        <Link to={`/producto/${producto.id}`}>
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
