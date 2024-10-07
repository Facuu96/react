import React from "react";
import { useParams } from "react-router-dom";
import prendas from "../productos";

function ItemDetail() {
    const { id } = useParams();
    const producto = prendas.find(producto => producto.id === parseInt(id));

    if (!producto) {
        return <h2>El producto no existe</h2>;
    }

    return (
        <div>
            <h2>Detalle del producto</h2>
            <h2>{producto.nombre}</h2>
            <p>{producto.descripcion}</p>
            <p>Precio: ${producto.precio}</p>
        </div>
    );
}

export default ItemDetail;


