import React, { useEffect, useRef, useState } from "react";
import styles from "./Home.module.css";
import rectangle from "./Assets/Rectangle 22.png";
import calvin from "./Assets/calvin.png";
import prada from "./Assets/prada.png";
import zara from "./Assets/Zara.png";
import gucci from "./Assets/gucci.png";
import versace from "./Assets/versace.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
  const brandAnimationVariants = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const brandImages = [
    { src: calvin, delay: 0 },
    { src: versace, delay: 0.2 },
    { src: gucci, delay: 0.4 },
    { src: prada, delay: 0.6 },
    { src: zara, delay: 0.8 },
  ];

  const brandDivRefs = useRef([]);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const scrollThreshold = windowHeight / 2;

      if (scrollPosition > scrollThreshold) {
        setIsAnimating(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className={styles.home_container}>
        <div className={styles.home_content}>
          <div className={styles.lefthome_side}>
            <div className={styles.home_headings}>
              <h1>
                FIND CLOTHES
                <br /> THAT MATCHES
                <br /> YOUR STYLE
              </h1>
              <p>
                Browse through our diverse range of meticulously crafted
                garments, designed
                <br /> to brin out your individually and cater to your series of
                style.
              </p>
              <Link
                style={{ color: "inherit", textDecoration: "none" }}
                to="shop"
              >
                <button>Shop Now</button>
              </Link>
            </div>
            <div className={styles.figure_container}>
              <div className={styles.brand_figure}>
                <p>200+</p>
                <span>International Brands</span>
              </div>
              <div className={styles.brand_figure}>
                <p>2,000+</p>
                <span>High-Quality Products</span>
              </div>
              <div className={styles.brand_figure}>
                <p>30,000+</p>
                <span>Happy Customers</span>
              </div>
            </div>
          </div>
          <div className={styles.home_image_container}>
            <img className={styles.home_image} src={rectangle} alt="" />
          </div>
        </div>
        <div className={styles.brandNames}>
          <div className={styles.brandnameContainer}>
            {brandImages.map((image, index) => (
              <div key={index} ref={(el) => (brandDivRefs.current[index] = el)}>
                <motion.div
                  variants={brandAnimationVariants}
                  initial="hidden"
                  animate={isAnimating ? "visible" : "hidden"}
                  className={styles.brandName}
                >
                  <img src={image.src} alt="" />
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
