import { React, useState, useEffect } from "react";
import styles from "./Shop.module.css";
import { motion } from "framer-motion";
import PRODUCT from "./Arrays/Products";
import { Link } from "react-router-dom";

const Shop = () => {
  const [minPrice, setMinPrice] = useState(50);
  const [maxPrice, setMaxPrice] = useState(200);

  const updatePriceDisplay = (value) => {
    setMinPrice(value);
  };

  const handleSliderChange = (event) => {
    updatePriceDisplay(event.target.value);
  };

  return (
    <div>
      <div className={styles.container}>
        <h1>Filters</h1>
        <div className={styles.filterOptions}>
          <p>T-shirts</p>
          <p>&gt;</p>
          <p>Shorts</p>
          <p>Shirts</p>
          <p>Hoodie</p>
          <p>Jeans</p>
        </div>
        <div className={styles.priceRange}>
          <p>Price</p>
          <input
            type="range"
            min="50"
            max="200"
            value={minPrice}
            onChange={handleSliderChange}
            className={styles.slider}
          />
          <p>
            $<span id="minPrice">{minPrice}</span> - $
            <span id="maxPrice">{maxPrice}</span>
          </p>
        </div>
        <div className={styles.otherFilters}>
          <p>Colors</p>
          <p>Size</p>
          <p>Dress Style</p>
        </div>
        <button className={styles.button}>Apply Filter</button>
      </div>
      <div className={styles.newarrivals}>
        <motion.div className={styles.arrivals_headings}>
          <p>TOP SELLINGS</p>
        </motion.div>
        <motion.div className={styles.shop_grid}>
          {PRODUCT.map((newArrival) => (
            <div className={styles.eachArrivals} key={newArrival.id}>
              <div className={styles.image_names}>
                <Link to={`/product/${newArrival.id}`} className={styles.link}>
                  <motion.div whileHover={{ scale: 1.1 }}>
                    <img src={newArrival.image} alt={newArrival.product_name} />
                  </motion.div>
                  <p>{newArrival.product_name}</p>
                </Link>
                <p className={styles.ratings_styles}>
                  ★★★★<span>4.5/5</span>
                </p>
              </div>
              <div className={styles.arrival_price}>
                <p>${newArrival.price}</p>
                <p>{newArrival.previous_price}</p>
                {newArrival.discount ? (
                  <p className={styles.discount}>{newArrival.discount}</p>
                ) : null}
              </div>
            </div>
          ))}
        </motion.div>
        <motion.div className={styles.viewall_button}>
          <button>View More</button>
        </motion.div>
      </div>
    </div>
  );
};

export default Shop;
