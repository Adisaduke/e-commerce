import { React, useState, useEffect } from "react";
import styles from "./Shop.module.css";
import { motion } from "framer-motion";
import PRODUCT from "./Arrays/Products";
import { Link } from "react-router-dom";
import FilterBar from "./Filter";

const Shop = () => {
  return (
    <div className={styles.filter_page_container}>
      <div className={styles.shop_content}>
        <div className={styles.filter_side}>
          <FilterBar />
        </div>
        <div className={styles.newarrivals}>
          <motion.div className={styles.arrivals_headings}>
            <p>Shop</p>
          </motion.div>
          <motion.div className={styles.shop_grid}>
            {PRODUCT.map((newArrival) => (
              <div className={styles.eachArrivals} key={newArrival.id}>
                <div className={styles.image_names}>
                  <Link
                    to={`/product/${newArrival.id}`}
                    className={styles.link}
                  >
                    <motion.div whileHover={{ scale: 1.1 }}>
                      <img
                        src={newArrival.image}
                        alt={newArrival.product_name}
                      />
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
    </div>
  );
};

export default Shop;
