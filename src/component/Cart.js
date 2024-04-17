import { React, useEffect, useState } from "react";
import styles from "./Cart.module.css";
import { MdOutlineDeleteForever } from "react-icons/md";
import cart_image from "./Assets/image 10.png";
import Card from "./ui/Card";

const Cart = ({ cartItems, removeFromCart }) => {
  const [subtotal, setSubtotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [total, setTotal] = useState(0);

  const deliveryFee = Math.floor(Math.random() * (20 - 10 + 1)) + 10;

  useEffect(() => {
    const formattedPrice = (price) => {
      if (typeof price === "string" && /^\d+(\.\d+)?$/.test(price)) {
        // Check if price is a string containing only digits and an optional decimal point
        price = parseFloat(price); // Parse price as a number
      }
      if (typeof price === "number" && !isNaN(price)) {
        return `$${price.toFixed(2)}`;
      } else {
        return 0; // Return 0 for invalid prices
      }
    };

    // Calculate subtotal
    const subtotalValue = cartItems.reduce((acc, item) => {
      const itemPrice = parseFloat(item.price || 0); // Parse item price
      return acc + (isNaN(itemPrice) ? 0 : itemPrice); // Add item price to accumulator if valid
    }, 0);
    setSubtotal(subtotalValue.toFixed(2));

    const totalDiscount = cartItems.reduce(
      (acc, item) => acc + (item.discount / 100) * item.price,
      0
    );
    setDiscount(totalDiscount);

    // Calculate total
    const totalValue = subtotalValue - totalDiscount + deliveryFee;
    setTotal(totalValue);
  }, [cartItems, deliveryFee]);

  const handleRemoveItem = (item) => {
    removeFromCart(item);
  };

  return (
    <div className={styles.everything}>
      <hr className={styles.cart_horizontal_top} />
      <div className={styles.cart_container}>
        <div className={styles.cart_headings}>
          <h1>YOUR CART</h1>
        </div>
        {cartItems.length === 0 ? (
          <div className={styles.no_prouct_in_cart}>
            <Card> No product added to your cart</Card>
          </div>
        ) : (
          <div className={styles.cart_content}>
            <div className={styles.cart_left}>
              <Card>
                <div className={styles.card_containers}>
                  {cartItems
                    .slice(0)
                    .reverse()
                    .map((item) => (
                      <div className={styles.each_cart_content}>
                        <div className={styles.cart_details_container}>
                          <div className={styles.cart_left_left}>
                            <div className={styles.cart_image}>
                              <img src={item.image} alt="cart_images" />
                            </div>
                            <div className={styles.cart_items}>
                              <p>{item.product_name}</p>
                              <p>
                                Size: <span>Large</span>
                              </p>
                              <p>
                                Color: <span>White</span>
                              </p>
                              <p>
                                {item.price}
                                <span className={styles.cart_details_discount}>
                                  {item.discount}
                                </span>
                              </p>
                            </div>
                          </div>
                          <div className={styles.delete_add_button}>
                            <div
                              className={styles.delete_icon}
                              onClick={() => handleRemoveItem(item)}
                            >
                              <MdOutlineDeleteForever />
                            </div>
                            <div className={styles.add_minus}>
                              <button className={styles.add_button}>+</button>
                              <span className={styles.item_count}>0</span>
                              <button className={styles.remove_button}>
                                -
                              </button>
                            </div>
                          </div>
                        </div>
                        <hr className={styles.cart_horizontal_line} />
                      </div>
                    ))}
                </div>
              </Card>
            </div>
            <div className={styles.cart_right}>
              <Card>
                <div className={styles.card_containers}>
                  <div className={styles.order_content}>
                    <p className={styles.order_summary}>Order Summary</p>
                    <p>
                      Subtotal
                      <span className={styles.cart_order_span}>{subtotal}</span>
                    </p>
                    <p>
                      Discount
                      <span className={styles.cart_order_span}>{discount}</span>
                    </p>
                    <p>
                      Delivery Fee
                      <span className={styles.cart_order_span}>
                        {deliveryFee}
                      </span>
                    </p>
                    <hr className={styles.cart_horizontal_line} />
                    <p>
                      Total
                      <span className={styles.cart_order_span}>{total}</span>
                    </p>
                  </div>
                  <div className={styles.order_aply_buttton}>
                    <input placeholder="Add promo code" />
                    <button>Apply</button>
                  </div>
                  <div className={styles.checkout_order_button}>
                    <button>Go to Checkout</button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
