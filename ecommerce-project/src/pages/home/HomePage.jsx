import axios from "axios";
import { useEffect, useState } from "react";
import "./HomePage.css";
import { Header } from "../../components/Header";
import { ProductsGrid } from "./ProductsGrid";

export function HomePage({ cart }) {
  const [products, setProducts] = useState([]);

  // fetch data
  // fetch("http://localhost:3000/api/products")
  //   .then((response) => {
  //     return response.json();
  //   })
  //   .then((data) => {
  //     console.log(data);
  //   });

  //useEffect
  useEffect(() => {
    //Use axios
    axios.get("/api/products").then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <>
      <link rel="icon" type="image/svg+xml" href="home.png" />
      <title>Home Page</title>

      <Header cart={cart} />
      <div className="home-page">
        <ProductsGrid products={products} />
      </div>
    </>
  );
}
