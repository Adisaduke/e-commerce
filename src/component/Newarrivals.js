import { React, useState, useEffect } from "react";
import styles from "./Newarrivals.module.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import PRODUCT from "./Arrays/Products";
import { Link } from "react-router-dom";

const Newarrivals = () => {
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

  const { ref: headingsRef, inView: headingsInView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  const { ref: containerRef, inView: containerInView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  const { ref: buttonRef, inView: buttonInView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const headingsAnimationVariants = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const containerAnimationVariants = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: 0.5 },
    },
  };

  const buttonAnimationVariants = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: 1 },
    },
  };

  return (
    <div className={styles.newarrivals}>
      <motion.div
        ref={headingsRef}
        initial="hidden"
        variants={headingsAnimationVariants}
        animate={headingsInView ? "visible" : "hidden"}
        className={styles.arrivals_headings}
      >
        <p>NEW ARRIVALS</p>
      </motion.div>
      <motion.div
        ref={containerRef}
        initial="hidden"
        variants={containerAnimationVariants}
        animate={containerInView ? "visible" : "hidden"} // Animate only when in view
        className={styles.arrivals_container}
      >
        {randomProduct.map((newArrival, index) => (
          <div className={styles.eachArrivals} key={index}>
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
              <p>{newArrival.price}</p>
              <p>{newArrival.previous_price}</p>
              {newArrival.discount ? (
                <p className={styles.discount}>{newArrival.discount}</p>
              ) : null}
            </div>
          </div>
        ))}
      </motion.div>
      <motion.div
        ref={buttonRef}
        initial="hidden"
        variants={buttonAnimationVariants}
        animate={buttonInView ? "visible" : "hidden"}
        className={styles.viewall_button}
      >
        <button>View All</button>
      </motion.div>
      <hr className={styles.newarrival_horizontal_line} />
    </div>
  );
};

export default Newarrivals;
