import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";
import { TiThMenu } from "react-icons/ti";
import { IoIosSearch } from "react-icons/io";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [prevIsMobile, setPrevIsMobile] = useState(false); // Track previous mobile state

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setIsMobile(screenWidth <= 767);

      // Close the menu if switching from desktop to mobile view
      if (!prevIsMobile && screenWidth <= 767 && menuOpen) {
        setMenuOpen(false);
      }
      setPrevIsMobile(screenWidth <= 768); // Update previous mobile state
    };

    // Initial check for mobile on component mount
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [menuOpen, prevIsMobile]); // Include menuOpen and prevIsMobile in the dependency array

  return (
    <div>
      <div className={styles.signup_container}>
        <div className={styles.signup_message}>
          <div className={styles.message_ss}>
            <p>Sign up and get 20% off to your first order.</p>
            <p className={styles.sign_up}>Sign Up Now</p>
          </div>
          <p className={styles.signup_cancle}>
            <MdOutlineCancel />
          </p>
        </div>
      </div>
      <div className={styles.navbar_container}>
        <div className={styles.left_side_menu}>
          <div className={styles.shop_name}>
            {isMobile && (
              <TiThMenu
                className={styles.hamburger_menu}
                onClick={toggleMenu}
              />
            )}
            <p>SHOP.CO</p>
          </div>
          {(!isMobile || menuOpen) && ( // Show menu on screens larger than 768px or if menu is open
            <div className={styles.menu_option}>
              <p>Shop</p>
              <p>On Sale</p>
              <p>New Arrivals</p>
              <p>Shop</p>
            </div>
          )}
        </div>
        <div className={styles.right_side_menu}>
          {isMobile ? (
            <div className={styles.search_container}>
              <p>
                <IoIosSearch />
              </p>
            </div>
          ) : (
            <div className={styles.search_container}>
              <input type="text" placeholder="Search for products..." />
            </div>
          )}
          <div className={styles.cart_profile}>
            <p>
              <FaShoppingCart />
            </p>
            <p>
              <FaUser />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
