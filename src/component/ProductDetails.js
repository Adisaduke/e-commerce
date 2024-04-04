import React from "react";
import styles from "./ProductDetails.module.css";
import detail1 from "./Assets/detail1.png";
import color from "./Assets/color.png";

const Productdetails = () => {
  return (
    <div>
      <div className={styles.product_details_container}>
        <div className={styles.right_single_image}>
          <img src={detail1} alt={detail1} />
        </div>
        <div className={styles.right_details}>
          <div className={styles.top_details}>
            <h1>ONE LIFE GRAPHIC T-SHIRT</h1>
            <p className={styles.details_ratings}>
              ★★★★<span>4.5/5</span>
            </p>
            <div className={styles.details_prices}>
              <p>$260</p>
              <p>$300</p>
              <p>-40%</p>
            </div>
            <p className={styles.details_text}>
              This grphic t-shirt which is perfect for any occasion. Crafted
              from a soft and breathable fabric. It offers superior comfort and
              style.
            </p>
          </div>
          <hr className={styles.details_horizontal_line} />
          <div className={styles.choose_color}>
            <p>Select Colors</p>
            <div className={styles.colors_div}>
              <img src={color} alt={color} />
            </div>
            <hr className={styles.details_horizontal_line} />
          </div>
          <div className={styles.choose_size}>
            <p>Choose Size</p>
            <div className={styles.size_div}>
              <div className={styles.size_button}>
                <button>Small</button>
              </div>
              <div className={styles.size_button}>
                <button>Medium</button>
              </div>
              <div className={styles.size_button}>
                <button>large</button>
              </div>
              <div className={styles.size_button}>
                <button>x-large</button>
              </div>
            </div>
            <hr className={styles.details_horizontal_line} />
          </div>
          <div className={styles.add_minus_button}>
            <div className={styles.add_minus}>
              <button className={styles.add_button}>+</button>
              <span className={styles.item_count}>0</span>
              <button className={styles.remove_button}>-</button>
            </div>
            <div className={styles.add_to_cart}>
              <button>Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productdetails;
