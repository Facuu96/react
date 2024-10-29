import React from "react";

function AddItemButton({ onAddToCart, disabled }) {
    return (
        <button onClick={onAddToCart} disabled={disabled}>
            {disabled ? "Sin Stock" : "Agregar al carrito"}
        </button>
    );
}

export default AddItemButton;
