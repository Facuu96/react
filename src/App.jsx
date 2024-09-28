import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/navBar/NavBar";
import ItemListContainer from "./DetailComponents/ItemDetailConteiner";
import ItemDetailContainer from "./DetailComponents/ItemDetail";
import Error from "./pages/error";
import Verano from "./pages/Verano";
import Invierno from "./pages/Invierno"
import ItemDetail from "./DetailComponents/ItemDetail";



function App() {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<ItemListContainer/>} />
                <Route path="/ItemDetail" element={<ItemDetail/>} />
                <Route path="/ItemDetailContainer/:id" element={<ItemDetailContainer />} />
                <Route path="/Verano" element={<Verano/>} />
                <Route path="/Invierno" element={<Invierno/>} />
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;

