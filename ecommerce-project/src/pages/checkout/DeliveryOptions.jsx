import dayjs from "dayjs";
import { moneyFormat } from "../../utils/moneyFormat";

export function DeliveryOptions({ deliveryOptions, cartItem }) {
  return (
    <div className="delivery-options">
      <div className="delivery-options-title">Choose a delivery option:</div>
      {deliveryOptions.map((opt) => {
        return (
          <div key={opt.id} className="delivery-option">
            <input
              type="radio"
              checked={opt.id === cartItem.deliveryOptionId}
              className="delivery-option-input"
              name={`delivery-option- ${cartItem.productId}`}
            />
            <div>
              <div className="delivery-option-date">
                {dayjs(opt.estimatedDeliveryTimeMs).format("dddd, MMMM D")}
              </div>
              <div className="delivery-option-price">
                {opt.priceCents == 0
                  ? "FREE Shipping"
                  : moneyFormat(opt.priceCents) + " - Shipping"}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
