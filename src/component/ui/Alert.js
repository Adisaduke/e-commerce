import React from "react";
import styles from "./Alert.module.css";

const CustomAlert = ({ message, onClose }) => {
  return (
    <div className={`${styles.alert} ${styles.show}`}>
      <p className={styles.alert_message}>{message}</p>
      <button className={styles.alert_button} onClick={onClose}>
        Close
      </button>
    </div>
  );
};

export default CustomAlert;
