import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";
import { TiThMenu } from "react-icons/ti";
import { IoIosSearch } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import PRODUCT from "./Arrays/Products";

const Header = ({
  cartItems,
  isLoggedIn,
  setIsLoggedIn,
  setFilteredProducts,
}) => {
  const [signUpShow, setSignUpShow] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [prevIsMobile, setPrevIsMobile] = useState(false);
  const [isLoggedOut, setIsLoggedOut] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const SignupButtonCancle = () => {
    setSignUpShow(false);
  };

  const LogoutHandler = () => {
    setIsLoggedIn(localStorage.getItem("isLoggedIn") === "false");
    setIsLoggedOut(false);
    navigate("/");
  };

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setIsMobile(screenWidth <= 767);

      if (!prevIsMobile && screenWidth <= 767 && menuOpen) {
        setMenuOpen(false);
      }
      setPrevIsMobile(screenWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [menuOpen, prevIsMobile]);

  useEffect(() => {
    if (isLoggedIn) {
      localStorage.setItem("isLoggedIn", "true");
      setIsLoggedOut(true);
    } else {
      localStorage.removeItem("isLoggedIn");
    }
  }, [isLoggedIn]);

  const handleSearch = () => {
    if (searchQuery.trim() !== "") {
      const filtered = PRODUCT.filter((product) =>
        product.product_name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      // If search query is empty, set filtered products to an empty array
      setFilteredProducts([]);
    }
    setSearchQuery("");
  };

  return (
    <div>
      <div className={styles.fixed_header_container}>
        {!isLoggedIn && (
          <div className={styles.signup_container}>
            {signUpShow && (
              <div className={styles.signup_message}>
                <div className={styles.message_ss}>
                  <p>Sign up and get 20% off to your first order.</p>
                  <Link to="login">
                    <p className={styles.sign_up}>Sign Up Now</p>
                  </Link>
                </div>
                <p className={styles.signup_cancle}>
                  <MdOutlineCancel onClick={SignupButtonCancle} />
                </p>
              </div>
            )}
          </div>
        )}
        <div className={styles.navbar_container}>
          <div className={styles.left_side_menu}>
            <div className={styles.shop_name}>
              {isMobile && (
                <TiThMenu
                  className={styles.hamburger_menu}
                  onClick={toggleMenu}
                />
              )}
              <Link
                to="/"
                style={{ color: "transparent", textDecoration: "none" }}
              >
                <p>SHOP.CO</p>
              </Link>
            </div>
            {(!isMobile || menuOpen) && (
              <div className={styles.menu_option}>
                <Link
                  style={{ color: "inherit", textDecoration: "none" }}
                  to="shop"
                >
                  <p>Shop</p>
                </Link>
                <p>On Sale</p>
                <p>New Arrivals</p>
                <p>Shop</p>
                {isLoggedOut && (
                  <p className={styles.logout_button} onClick={LogoutHandler}>
                    Log out
                  </p>
                )}
              </div>
            )}
          </div>
          <div className={styles.right_side_menu}>
            {isMobile ? (
              <div className={styles.search_container}>
                <IoIosSearch
                  className={styles.search_icon}
                  onClick={handleSearch}
                />
                <input
                  className={styles.input}
                  type="text"
                  placeholder="Search for products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            ) : (
              <div className={styles.search_container}>
                <input
                  className={styles.input}
                  type="text"
                  placeholder="Search for products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <IoIosSearch
                  className={styles.search_icon}
                  onClick={handleSearch}
                />
              </div>
            )}
            <div className={styles.cart_profile}>
              <Link
                to="/cart"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                <p>
                  <FaShoppingCart />
                  {cartItems.length > 0 && (
                    <span className={styles.product_number}>
                      {cartItems.length}
                    </span>
                  )}
                </p>
              </Link>
              {isLoggedIn && (
                <Link style={{ color: "inherit" }}>
                  <p>
                    <FaUser />
                  </p>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
