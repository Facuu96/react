import React, { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import db from "../firebaseConfig";
import { Link } from "react-router-dom";
import './verano.css';

function Verano() {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProductos = async () => {
            try {
                const productosCollection = collection(db, "items");
                const q = query(productosCollection, where("categoryId", "==", "verano"));
                const productosSnapshot = await getDocs(q);
                const productosList = productosSnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setProductos(productosList);
            } catch (error) {
                console.error("Error al obtener productos de verano:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProductos();
    }, []);

    if (loading) return <h2 className="loading-message">Cargando productos de verano...</h2>;

    return (
        <div className="verano-container">
            <h1 className="verano-title">Productos de Verano</h1>
            {productos.length > 0 ? (
                <div className="productos-list">
                    {productos.map((producto) => (
                        <div className="producto-item" key={producto.id}>
                            <Link to={`/producto/${producto.id}`} className="producto-link">
                                <img src={`/images/${producto.image}`} alt={producto.title} className="producto-image" />
                                <h2 className="producto-title">{producto.title}</h2>
                                <p className="producto-price">Precio: ${producto.price}</p>
                            </Link>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="no-products-message">No se encontraron productos de verano.</p>
            )}
        </div>
    );
}

export default Verano;
