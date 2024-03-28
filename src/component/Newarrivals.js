import React from "react";
import styles from "./Newarrivals.module.css";
import image7 from "./Assets/image 7.png";
import image8 from "./Assets/image 8.png";
import image9 from "./Assets/image 9.png";
import image10 from "./Assets/image 10.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Newarrivals = () => {
    const { ref: headingsRef, inView: headingsInView } = useInView({ threshold: 0.5, triggerOnce: true }); // Observe when 50% of the element is visible, trigger animation only once
    const { ref: containerRef, inView: containerInView } = useInView({ threshold: 0.5, triggerOnce: true }); // Observe when 50% of the element is visible, trigger animation only once
    const { ref: buttonRef, inView: buttonInView } = useInView({ threshold: 0.5, triggerOnce: true }); // Observe when 50% of the element is visible, trigger animation only once


    const headingsAnimationVariants = {
        hidden: {
            opacity: 0,
            y: 100, // Move the element 100px downwards initially
        },
        visible: {
            opacity: 1,
            y: 0, // Move the element back to its original position
            transition: { duration: 0.5 }, // Set animation duration to 0.5 seconds
        },
    };

    const containerAnimationVariants = {
        hidden: {
            opacity: 0,
            y: 100, // Move the element 100px downwards initially
        },
        visible: {
            opacity: 1,
            y: 0, // Move the element back to its original position
            transition: { duration: 0.5, delay: 0.5 }, // Set animation duration to 0.5 seconds with a delay of 0.5 seconds
        },
    };

    const buttonAnimationVariants = {
        hidden: {
            opacity: 0,
            y: 100, // Move the element 100px downwards initially
        },
        visible: {
            opacity: 1,
            y: 0, // Move the element back to its original position
            transition: { duration: 0.5, delay: 1 }, // Set animation duration to 0.5 seconds with a delay of 1 second
        },
    };

    const NEW_ARRIVALS = [
        {
            product_name: "T-shirt with Tape Details",
            image: image7,
            ratings: 5,
            price: "$120",
        },
        {
            product_name: "Skinny Fit Jeans",
            image: image8,
            ratings: 4,
            price: "$240",
            previous_price: "$260",
            discount: "-20%",
        },
        {
            product_name: "Checkered Shirt",
            image: image9,
            ratings: 4,
            price: "$180",
        },
        {
            product_name: "Sleeve Striped T-shirt",
            image: image10,
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
                initial="hidden" // Keep this for initial animation
                variants={headingsAnimationVariants}
                animate={headingsInView ? "visible" : "hidden"} className={styles.arrivals_headings}>
                <p>NEW ARRIVALS</p>
            </motion.div>
            <motion.div
                ref={containerRef}
                initial="hidden" // Keep this for initial animation
                variants={containerAnimationVariants}
                animate={containerInView ? "visible" : "hidden"} // Animate only when in view
                className={styles.arrivals_container}
            >
                {NEW_ARRIVALS.map((newArrival, index) => (
                    <div className={styles.eachArrivals} key={index}>
                        <div className={styles.image_names}>
                            <motion.div whileHover={{ scale: 1.1 }}>
                                <img src={newArrival.image} alt={newArrival.image} />
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
            <motion.div ref={buttonRef}
                initial="hidden" // Keep this for initial animation
                variants={buttonAnimationVariants}
                animate={buttonInView ? "visible" : "hidden"} className={styles.viewall_button}>
                <button>View All</button>
            </motion.div>
            <hr className={styles.newarrival_horizontal_line} />
        </div>
    );
};

export default Newarrivals;
