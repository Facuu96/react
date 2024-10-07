import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/navBar/NavBar";
import ItemDetailContainer from "./DetailComponents/ItemDetailConteiner";
import ItemDetail from "./DetailComponents/ItemDetail"; 
import Error from "./pages/error";
import Verano from "./pages/Verano";
import Invierno from "./pages/Invierno";

function App() {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                
                <Route path="/" element={<ItemDetailContainer />} />
                <Route path="/producto/:id" element={<ItemDetail />} />
                <Route path="/Verano" element={<Verano />} />
                <Route path="/Invierno" element={<Invierno />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
