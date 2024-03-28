import React from "react";
import styles from "./Topsellings.module.css";
import image11 from "./Assets/image 11.png";
import image12 from "./Assets/image 12.png";
import image13 from "./Assets/image 13.png";
import image14 from "./Assets/image 14.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Topsellings = () => {
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

    const TOP_SELLING = [
        {
            product_name: "T-shirt with Tape Details",
            image: image11,
            ratings: 5,
            price: "$120",
        },
        {
            product_name: "Skinny Fit Jeans",
            image: image12,
            ratings: 4,
            price: "$240",
            previous_price: "$260",
            discount: "-20%",
        },
        {
            product_name: "Checkered Shirt",
            image: image13,
            ratings: 4,
            price: "$180",
        },
        {
            product_name: "Sleeve Striped T-shirt",
            image: image14,
            ratings: 5,
            price: "$130",
            previous_price: "$160",
            discount: "-30%",
        },
    ];

    return (
        <div className={styles.newarrivals}>
            <motion.div
                ref={headingsRef}
                initial="hidden"
                variants={headingsAnimationVariants}
                animate={headingsInView ? "visible" : "hidden"}
                className={styles.arrivals_headings}
            >
                <p>TOP SELLINGS</p>
            </motion.div>
            <motion.div
                ref={containerRef}
                initial="hidden"
                variants={containerAnimationVariants}
                animate={containerInView ? "visible" : "hidden"}
                className={styles.arrivals_container}
            >
                {TOP_SELLING.map((newArrival, index) => (
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
        </div>
    );
};

export default Topsellings;
