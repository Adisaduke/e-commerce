import React, { useEffect, useRef, useState } from "react";
import styles from './Home.module.css';
import rectangle from './Assets/Rectangle 22.png';
import calvin from './Assets/calvin.png';
import prada from './Assets/prada.png';
import zara from './Assets/Zara.png';
import gucci from './Assets/gucci.png';
import versace from './Assets/versace.png';
import { motion } from 'framer-motion';

const Home = () => {
    const brandAnimationVariants = {
        hidden: {
            opacity: 0,
            x: -100, // Move the element 100px to the left initially
        },
        visible: {
            opacity: 1,
            x: 0, // Move the element back to its original position
            transition: { duration: 1, ease: "easeOut" }, // Set animation duration to 1 second
        },
    };

    // Array of images
    const brandImages = [
        { src: calvin, delay: 0 },
        { src: versace, delay: 0.2 },
        { src: gucci, delay: 0.4 },
        { src: prada, delay: 0.6 },
        { src: zara, delay: 0.8 },
    ];

    const brandDivRefs = useRef([]); // Array to store references to brand divs
    const [isAnimating, setIsAnimating] = useState(false); // State to track animation status

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY; // Get the current scroll position
            const windowHeight = window.innerHeight; // Get the height of the viewport
            const scrollThreshold = windowHeight / 2; // Set the scroll threshold to half of the viewport height

            // Check if the user has scrolled down by at least the scroll threshold
            if (scrollPosition > scrollThreshold) {
                setIsAnimating(true); // Start the animation
            }
        };

        // Add event listener for scroll
        window.addEventListener('scroll', handleScroll);

        // Cleanup function to remove event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <div className={styles.home_container}>
                <div className={styles.home_content}>
                    <div className={styles.lefthome_side}>
                        <div className={styles.home_headings}>
                            <h1>FIND CLOTHES<br /> THAT MATCHES<br /> YOUR STYLE</h1>
                            <p>Browse through our diverse range of meticulously crafted garments, designed<br /> to brin out your individually and cater to your series of style.</p>
                            <button>Shop Now</button>
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
                                    variants={brandAnimationVariants} // Maintain for initial visibility
                                    initial="hidden" // Optional: Use to control initial visibility separately
                                    animate={isAnimating ? "visible" : "hidden"} // Toggle visibility based on animation state
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
