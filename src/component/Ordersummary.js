import React from "react";
import styles from "./OrderSummary.module.css";

const OrderSummary = ({ cartItems }) => {
  // Calculate total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className={styles.orderSummaryContainer}>
      <h2 className={styles.orderSummaryTitle}>Order Summary</h2>
      <ul className={styles.orderList}>
        {cartItems.map((item) => (
          <li key={item.id} className={styles.orderItem}>
            <span className={styles.orderItemName}>{item.product_name}</span> -
            <span className={styles.orderItemPrice}> ${item.price}</span>
            <span className={styles.orderItemQuantity}>
              (Quantity: {item.quantity})
            </span>
          </li>
        ))}
      </ul>
      <hr className={styles.divider} />
      <div className={styles.total}>
        <span className={styles.totalLabel}>Total:</span>
        <span className={styles.totalPrice}>${totalPrice.toFixed(2)}</span>
      </div>
      <button className={styles.placeOrderButton}>Place Order</button>
    </div>
  );
};

export default OrderSummary;
