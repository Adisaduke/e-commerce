import React from "react";
import styles from "./Category.module.css";
import image15 from "./Assets/image 15.png";
import image16 from "./Assets/image 16.png";
import image17 from "./Assets/image 17.png";
import image18 from "./Assets/image 18.png";
import { motion } from "framer-motion";

const Category = () => {
  return (
    <div>
      <div className={styles.category_container}>
        <div className={styles.category_headings}>
          <p>BROWSE BY DRESS STYLE</p>
        </div>
        <div className={styles.category_image_container}>
          <div className={styles.category}>
            <motion.div whileHover={{ scale: 1.1 }}>
              <p>Casual</p>
              <img src={image16} alt={image15} />
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }}>
              <p>Formal</p>
              <img src={image17} alt={image16} />
            </motion.div>
          </div>
          <div className={styles.category}>
            <motion.div whileHover={{ scale: 1.1 }}>
              <p>Party</p>
              <img src={image18} alt={image17} />
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }}>
              <p>Gym</p>
              <img src={image15} alt={image18} />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
