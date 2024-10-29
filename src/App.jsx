import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemDetailConteiner from "./DetailComponents/ItemDetailConteiner";
import ItemDetail from "./DetailComponents/ItemDetail";
import Error from "./pages/Error";
import Verano from "./pages/Verano";
import Invierno from "./pages/Invierno";
import { CartProvider } from "./DetailComponents/CartContext";
import Checkout from "./DetailComponents/CheckOut"; 

function App() {
    return (
        <CartProvider>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/" element={<ItemDetailConteiner />} />
                    <Route path="/producto/:id" element={<ItemDetail />} />
                    <Route path="/verano" element={<Verano />} />
                    <Route path="/invierno" element={<Invierno />} />
                    <Route path="/checkout" element={<Checkout />} /> 
                    <Route path="*" element={<Error />} />
                </Routes>
            </BrowserRouter>
        </CartProvider>
    );
}

export default App;
