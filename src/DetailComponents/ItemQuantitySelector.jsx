import React, { useState } from "react";

function ItemQuantitySelector({ onQuantityChange, maxQuantity }) {
    const [quantity, setQuantity] = useState(1);

    const increment = () => {
        setQuantity(prev => {
            const newQuantity = prev + 1;
            onQuantityChange(newQuantity);
            return newQuantity;
        });
    };

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(prev => {
                const newQuantity = prev - 1;
                onQuantityChange(newQuantity);
                return newQuantity;
            });
        }
    };

    return (
        <div>
            <button onClick={decrement}>-</button>
            <span>{quantity}</span>
            <button onClick={increment} disabled={quantity >= maxQuantity}>+</button>
        </div>
    );
}

export default ItemQuantitySelector;
