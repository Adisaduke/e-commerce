import React from "react";
import { Link } from "react-router-dom";
import styles from "./LoginRequiredPage.module.css";
import { FaShoppingCart } from "react-icons/fa";

const LoginRequiredPage = () => {
  return (
    <div className={styles.container}>
      <div>
        <FaShoppingCart className={styles.cart_required_page} />
      </div>
      <h2 className={styles.title}>Login Required</h2>
      <p className={styles.message}>
        You need to login first before you can continue.
      </p>
      <div>
        <Link to="/login" className={styles.loginLink}>
          Login
        </Link>
      </div>
      <div>
        <Link to="/" className={styles.loginLink}>
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default LoginRequiredPage;
