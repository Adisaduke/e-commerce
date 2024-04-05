import { React, useState, useEffect } from "react";
import Allreviews from "./Allreviews";
import styles from "./Productreviews.module.css";
import { motion } from "framer-motion";
import PRODUCT from "./Arrays/Products";

function Productreviews() {
  const [randomProduct, setRandomProduct] = useState([]);

  useEffect(() => {
    const shuffledProducts = shuffleArray(PRODUCT);
    const selectedProducts = shuffledProducts.slice(0, 4);
    setRandomProduct(selectedProducts);
  }, []);

  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  return (
    <div>
      <Allreviews />
      <div>
        <div className={styles.other_options}>
          <div className={styles.option_headings}>
            <h1>YOU MIGHT ALSO LIKE</h1>
          </div>
          <div className={styles.arrivals_container}>
            {randomProduct.map((newArrival, index) => (
              <div className={styles.eachArrivals} key={index}>
                <div className={styles.image_names}>
                  <motion.div whileHover={{ scale: 1.1 }}>
                    <img src={newArrival.image} alt={newArrival.product_name} />
                  </motion.div>
                  <p>{newArrival.product_name}</p>
                  <p>
                    ★★★★<span>4.5/5</span>
                  </p>
                </div>
                <div className={styles.arrival_price}>
                  <p>{newArrival.price}</p>
                  <p>{newArrival.previous_price}</p>
                  {newArrival.discount ? (
                    <p className={styles.discount}>{newArrival.discount}</p>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Productreviews;
