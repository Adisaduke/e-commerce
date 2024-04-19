import React, { useState } from "react";
import styles from "./Login.module.css";
import { FaBackward } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Login = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setUsername("");
    setPassword("");
    setIsLoggedIn(true);
    navigate("/");
  };

  return (
    <div>
      <div className={styles.container}>
        <h1 className={styles.title}>Login</h1>
        <p className={styles.subtitle}>Welcome back! Please sign in.</p>
        <form onSubmit={handleSubmit} className={styles.form}>
          <label htmlFor="username" className={styles.label}>
            Username:
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className={styles.input}
          />
          <label htmlFor="password" className={styles.label}>
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.input}
          />
          <button type="submit" className={styles.submitButton}>
            Login
          </button>
        </form>
        <div className={styles.container}>
          <a href="#" className={styles.forgotPasswordLink}>
            Forgot Password?
          </a>
        </div>
        <div className={styles.backto_home_container}>
          <Link to="/" style={{ color: "inherit" }}>
            <FaBackward className={styles.back_icon} />
            <p className={styles.back_text}>Back to home</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
