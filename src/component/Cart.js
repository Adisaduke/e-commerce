import React from "react";
import styles from "./Cart.module.css";
import { MdOutlineDeleteForever } from "react-icons/md";
import cart_image from "./Assets/image 10.png";

function Cart() {
  return (
    <div>
      <div className={styles.cart_container}>
        <div className={styles.cart_headings}>
          <h1>YOUR CART</h1>
        </div>
        <div className={styles.cart_content}>
          <div className={styles.cart_left}>
            <div className={styles.cart_details_container}>
              <div className={styles.cart_left_left}>
                <div className={styles.cart_image}>
                  <img src={cart_image} alt="cart_images" />
                </div>
                <div className={styles.cart_items}>
                  <p>Gradient Graphic T-shirt</p>
                  <p>
                    Size: <span>Large</span>
                  </p>
                  <p>
                    Color: <span>White</span>
                  </p>
                  <p>$145</p>
                </div>
              </div>
              <div className={styles.delete_add_button}>
                <div className={styles.delete_icon}>
                  <MdOutlineDeleteForever />
                </div>
                <div className={styles.add_minus}>
                  <button className={styles.add_button}>+</button>
                  <span className={styles.item_count}>0</span>
                  <button className={styles.remove_button}>-</button>
                </div>
              </div>
            </div>
            <hr />
          </div>
          <div className={styles.cart_right}>
            <div className={styles.order_content}>
              <p className={styles.order_summary}>Order Summary</p>
              <p>
                Subtotal<span className={styles.cart_order_span}>$565</span>
              </p>
              <p>
                Discount<span className={styles.cart_order_span}>-$113</span>
              </p>
              <p>
                Delivery Fee<span className={styles.cart_order_span}>$15</span>
              </p>
              <hr />
              <p>
                Total<span className={styles.cart_order_span}>$467</span>
              </p>
            </div>
            <div>
              <input placeholder="Add promo code" />
              <button>Apply</button>
            </div>
            <div>
              <button>Go to Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
