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
    const getCartItemsData = async () => {
      const response = await axios.get("/api/cart-items?expand=product");
      setCart(response.data);
    };

    getCartItemsData();
  }, []);

  return (
    <>
      <Routes>
        <Route index element={<HomePage cart={cart} />} />
        <Route path="/checkout" element={<Checkout cart={cart} />} />
        <Route path="/orders" element={<Orders cart={cart} />} />
        <Route path="/tracking/:orderId/:productId" element={<Tracking cart={cart} />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
