import React, { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import db from "../firebaseConfig";
import { Link } from "react-router-dom";
import './invierno.css';

function Invierno() {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProductos = async () => {
            try {
                const productosCollection = collection(db, "items");
                const q = query(productosCollection, where("categoryId", "==", "invierno"));
                const productosSnapshot = await getDocs(q);
                const productosList = productosSnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setProductos(productosList);
            } catch (error) {
                console.error("Error al obtener productos de invierno:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProductos();
    }, []);

    if (loading) return <h2>Cargando productos de invierno...</h2>;

    return (
        <div className="invierno-container">
            <h1 className="invierno-title">Productos de Invierno</h1>
            {productos.length > 0 ? (
                <div className="productos-list">
                    {productos.map((producto) => (
                        <div key={producto.id} className="producto-item">
                            <Link to={`/producto/${producto.id}`} className="producto-link">
                                <img
                                    src={`/images/${producto.image}`} 
                                    alt={producto.title}
                                    className="producto-image" 
                                />
                                <h2 className="producto-title">{producto.title}</h2>
                                <p className="producto-price">Precio: ${producto.price}</p>
                            </Link>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No se encontraron productos de invierno.</p>
            )}
        </div>
    );
}

export default Invierno;
