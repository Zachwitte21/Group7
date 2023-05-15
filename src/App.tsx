import React from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import { Route, Switch } from "react-router-dom";
//import Cart from "./pages/Cart";
import { Home } from "./pages/Home";
import Navbar from "./Navbar";
import Checkout from "./pages/Checkout";
import AdminPage from "./pages/Admin";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import HistoryOrder from "./pages/HistoryOrder";
import { CartProvider } from "./CartContext";

function App() {
    return (
        <CartProvider>
            <Navbar />
            <Container>
                <Switch>
                    <Route path="/homepage" component={Home} />
                    <Route path="/checkout" component={Checkout} />
                    <Route path="/historyorder" component={HistoryOrder} />
                    <Route path="/admin" component={AdminPage} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={SignUp} />
                </Switch>
            </Container>
        </CartProvider>
    );
}

export default App;
