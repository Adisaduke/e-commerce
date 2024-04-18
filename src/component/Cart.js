import { React, useEffect, useState } from "react";
import styles from "./Cart.module.css";
import { MdOutlineDeleteForever } from "react-icons/md";
import cart_image from "./Assets/image 10.png";
import Card from "./ui/Card";

const Cart = ({ cartItems, removeFromCart }) => {
  const deliveryFee = Math.floor(Math.random() * (20 - 10 + 1)) + 10;

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
                              <p>{item.price}</p>
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
                      <span className={styles.cart_order_span}></span>
                    </p>
                    <p>
                      Delivery Fee
                      <span className={styles.cart_order_span}>
                        ${deliveryFee}
                      </span>
                    </p>
                    <hr className={styles.cart_horizontal_line} />
                    <p>
                      Total
                      <span className={styles.cart_order_span}></span>
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
