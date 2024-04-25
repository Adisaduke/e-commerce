import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./ProductDetails.module.css";
import detail1 from "./Assets/detail1.png";
import color from "./Assets/color.png";
import PRODUCT from "./Arrays/Products";
import Productreviews from "./Productreviews";

const Productdetails = ({ addToCart, quantity, warning }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    console.log("ID from URL:", id);
    const selectedProduct = PRODUCT.find(
      (product) => product.id === parseInt(id)
    );
    console.log(selectedProduct);

    setProduct(selectedProduct);
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!product) {
    return <div>Loading...</div>;
  }

  const { image, product_name, ratings, price, previous_price, discount } =
    product;

  return (
    <>
      <div>
        <div className={styles.product_details_container}>
          {warning && (
            <div className={styles.warning_message}>
              Item is already added to the cart
            </div>
          )}
          <div className={styles.right_single_image}>
            <img src={image} alt={detail1} />
          </div>
          <div className={styles.right_details}>
            <div className={styles.top_details}>
              <h1>{product_name}</h1>
              <p className={styles.details_ratings}>
                {ratings}
                <span>4.5/5</span>
              </p>
              <div className={styles.details_prices}>
                <p>${price}</p>
                <p>{previous_price}</p>
                {discount ? <p>{discount}</p> : null}
              </div>
              <p className={styles.details_text}>
                This grphic t-shirt which is perfect for any occasion. Crafted
                from a soft and breathable fabric. It offers superior comfort
                and style.
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
              <div className={styles.add_to_cart}>
                <button onClick={() => addToCart({ ...product, quantity })}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Productreviews />
    </>
  );
};

export default Productdetails;
