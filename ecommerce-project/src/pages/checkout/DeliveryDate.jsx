import dayjs from "dayjs";

export function DeliveryDate({ deliveryOptions, cartItem }) {
  const selectedOption = deliveryOptions.find((opt) => {
    return cartItem.deliveryOptionId === opt.id;
  });

  return (
    <div className="delivery-date">
      Delivery date:{" "}
      {dayjs(selectedOption.estimatedDeliveryTimeMs).format("dddd, MMMM D")}
    </div>
  );
}
