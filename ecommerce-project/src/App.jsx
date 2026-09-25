import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { HomePage } from "./pages/home/HomePage";
import { Checkout } from "./pages/checkout/Checkout";
import { Orders } from "./pages/orders/Orders";
import { Routes, Route } from "react-router";
import { Tracking } from "./pages/Tracking";
import { NotFoundPage } from "./pages/NotFoundPage";

function App() {
  //Pour checkout
  const [cart, setCart] = useState([]);
  useEffect(() => {
    axios.get("/api/cart-items?expand=product").then((response) => {
      setCart(response.data);
    });
  }, []);

  return (
    <>
      <Routes>
        <Route index element={<HomePage cart={cart} />} />
        <Route path="/checkout" element={<Checkout cart={cart} />} />
        <Route path="/orders" element={<Orders cart={cart} />} />
        <Route path="/tracking" element={<Tracking />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
