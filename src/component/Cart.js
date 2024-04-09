import React from "react";
import styles from "./Cart.module.css";
import { MdOutlineDeleteForever } from "react-icons/md";

function Cart() {
  return (
    <div>
      <div>
        <div>
          <h1>YOUR CART</h1>
        </div>
        <div>
          <div className={styles.cart_left}>
            <div>
              <div className={styles.cart_left_left}>
                <div>
                  <img src="" alt="" />
                </div>
                <div>
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
                <MdOutlineDeleteForever />
                <div className={styles.add_minus}>
                  <button className={styles.add_button}>+</button>
                  <span className={styles.item_count}>0</span>
                  <button className={styles.remove_button}>-</button>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.cart_right}></div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
