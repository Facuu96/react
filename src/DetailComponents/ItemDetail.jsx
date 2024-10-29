import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import db from "../firebaseConfig";
import ItemQuantitySelector from "./ItemQuantitySelector";
import { CartContext } from "./CartContext";
import AddItemButton from "./AddItemButton";
import "./itemdetail.css";

function ItemDetail() {
    const { id } = useParams();
    const [producto, setProducto] = useState(null);
    const [loading, setLoading] = useState(true);
    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useContext(CartContext);

    useEffect(() => {
        const fetchProducto = async () => {
            const docRef = doc(db, "items", id);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                setProducto({ id: docSnap.id, ...docSnap.data() });
            } else {
                setProducto(null);
            }
            setLoading(false);
        };

        fetchProducto();
    }, [id]);

    const handleAddToCart = () => {
        addToCart(producto.id, quantity, producto.title, producto.price);
        setProducto(prevProducto => ({
            ...prevProducto,
            stock: prevProducto.stock - quantity
        }));
    };

    const handleQuantityChange = (newQuantity) => {
        if (newQuantity <= producto.stock) {
            setQuantity(newQuantity);
        }
    };

    if (loading) {
        return <h2>Cargando producto...</h2>;
    }

    if (!producto) {
        return <h2>El producto no existe</h2>;
    }

    return (
        <div className="item-detail-container">
            <h2 className="item-title">{producto.title}</h2>
            <img 
                src={`/images/${producto.image}`} 
                alt={producto.title} 
                className="item-image" 
            />
            <p className="item-description">{producto.description}</p>
            <p className="item-price">Precio: ${producto.price}</p>
            <p className="item-stock">Stock disponible: {producto.stock}</p>
            <ItemQuantitySelector
                onQuantityChange={handleQuantityChange}
                maxQuantity={producto.stock}
            />
            <AddItemButton onAddToCart={handleAddToCart} disabled={producto.stock === 0} />
        </div>
    );
}

export default ItemDetail;
