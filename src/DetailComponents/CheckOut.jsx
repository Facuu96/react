import React, { useContext } from "react";
import { CartContext } from "../DetailComponents/CartContext";
import "./checkout.css"; 

function Checkout() {
    const { cart, removeFromCart, clearCart } = useContext(CartContext);

    const handleRemoveItem = (id) => {
        removeFromCart(id);
    };

    const handleClearCart = () => {
        clearCart();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };


    const totalAmount = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div className="checkout-container">
            <h2 className="checkout-title">Carrito de Compras</h2>
            {cart.length === 0 ? (
                <p className="empty-cart">No hay productos en el carrito.</p>
            ) : (
                <div>
                    <ul className="cart-items-list">
                        {cart.map((item) => (
                            <li key={item.id} className="cart-item">
                                <span>
                                    {item.title} - Precio: ${item.price} - Cantidad: {item.quantity} - Total: ${item.price * item.quantity}
                                </span>
                                <button className="remove-item-button" onClick={() => handleRemoveItem(item.id)}>
                                    Eliminar
                                </button>
                            </li>
                        ))}
                    </ul>
                    <button className="clear-cart-button" onClick={handleClearCart}>Eliminar todos</button>
                    <h3 className="total-amount">Total de la compra: ${totalAmount}</h3>
                </div>
            )}
            <h3 className="checkout-subtitle">Finalizar Compra</h3>
            <form className="checkout-form" onSubmit={handleSubmit}>
                <input className="input-field" type="text" placeholder="Nombre" required />
                <input className="input-field" type="email" placeholder="Email" required />
                <button className="confirm-button" type="submit">Confirmar Compra</button>
            </form>
        </div>
    );
}

export default Checkout;
