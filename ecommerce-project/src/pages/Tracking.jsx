import { useState, useEffect } from "react";
import axios from "axios";
import dayjs from "dayjs";
import { Link } from "react-router";
import { useParams } from "react-router";
import "./Tracking.css";
import { Header } from "../components/Header";

export function Tracking({ cart }) {
  const { orderId, productId } = useParams();

  const [order, setOrder] = useState(null);

  useEffect(() => {
    const getTrackingData = async () => {
      const response = await axios.get(
        `/api/orders/${orderId}?expand=products`,
      );
      setOrder(response.data);
    };

    getTrackingData();
  }, [orderId]);

  if (!order) {
    return null;
  }
  const selectedOrderProduct = order.products.find((orderProduct) => {
    return orderProduct.productId === productId;
  });

  return (
    <>
      <title>Tracking</title>
      <link rel="icon" type="image/svg+xml" href="tracking.png" />

      <Header cart={cart} />
      <div className="tracking-page">
        <div className="order-tracking">
          <Link className="back-to-orders-link link-primary" to="/orders">
            View all orders
          </Link>

          <div className="delivery-date">
            Arriving on{" "}
            {dayjs(selectedOrderProduct.estimatedDeliveryTimeMs).format(
              "dddd, MMMM D",
            )}
          </div>

          <div className="product-info">
            {selectedOrderProduct.product.name}
          </div>

          <div className="product-info">
            Quantity: {selectedOrderProduct.quantity}
          </div>

          <img
            className="product-image"
            src={selectedOrderProduct.product.image}
          />

          <div className="progress-labels-container">
            <div className="progress-label">Preparing</div>
            <div className="progress-label current-status">Shipped</div>
            <div className="progress-label">Delivered</div>
          </div>

          <div className="progress-bar-container">
            <div className="progress-bar"></div>
          </div>
        </div>
      </div>
    </>
  );
}
