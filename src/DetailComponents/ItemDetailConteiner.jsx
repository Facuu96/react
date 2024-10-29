import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import db from "../firebaseConfig";
import { Link } from "react-router-dom";
import "./items.css";

function ItemDetailContainer() {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProductos = async () => {
            try {
                const productosCollection = collection(db, "items");
                const productosSnapshot = await getDocs(productosCollection);
                const productosList = productosSnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setProductos(productosList);
                setLoading(false);
            } catch (error) {
                console.error("Error obteniendo productos:", error);
            }
        };

        fetchProductos();
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
                            <img 
                                src={`/images/${producto.image}`} 
                                alt={producto.title} 
                                className="card-image" 
                            />
                            <h2 className="card-title">{producto.title || "Sin nombre disponible"}</h2>
                            <p className="card-price">Precio: ${producto.price || "Sin precio disponible"}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ItemDetailContainer;
