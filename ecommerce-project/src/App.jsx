import "./App.css";
import { HomePage } from "./pages/HomePage";
import { Checkout } from "./pages/checkout/Checkout";
import { Orders } from "./pages/Orders";
import { Routes, Route } from "react-router";
import { Tracking } from "./pages/Tracking";
import { NotFoundPage } from "./pages/NotFoundPage";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/tracking" element={<Tracking />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
