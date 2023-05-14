import React from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import { Home } from "./pages/Home";
import Navbar from "./Navbar";
import Checkout from "./pages/Checkout";
import AdminPage from "./pages/Admin";
import Login from "./pages/Login";
import HistoryOrder from "./pages/HistoryOrder";
import { CartProvider } from "./CartContext";

function App() {
    return (
        <CartProvider>
            <Navbar />
            <Container>
                <Routes>
                    <Route path="/homepage" element={<Home />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/historyorder" element={<HistoryOrder />} />
                    <Route path="/admin" element={<AdminPage />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </Container>
        </CartProvider>
    );
}

export default App;
