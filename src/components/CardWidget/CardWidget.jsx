import React, { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../../DetailComponents/CartContext";

function CardWidget() {
    const { cart } = useContext(CartContext);
    
    const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

    return (
        <div className="carrito">
            <FaShoppingCart size="35px" />
            <span className="numero">{totalQuantity}</span>
        </div>
    );
}

export default CardWidget;
