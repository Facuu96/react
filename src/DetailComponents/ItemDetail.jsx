import React from "react";
import { useParams,} from "react-router-dom";
import prendas from "../productos";


function ItemDetail() {
    const { id } = useParams();
    const Productos = prendas.find(Productos=>Productos.id===parseInt(id))

    if (!Productos) {
        return ( 
            <h2>El producto no existe</h2>
        )
    }

    return (
        <div>
            <h2>Detalle del producto</h2>
            <h2>{Productos.nombre}</h2>
            <h2>{Productos.descripcion}</h2>
            <h2>{Productos.precio}</h2>
        </div>
    )
    
}

export default ItemDetail;


