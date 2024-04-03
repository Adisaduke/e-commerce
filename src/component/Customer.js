import React from "react";
import styles from "./Customer.module.css";
import { MdVerified } from "react-icons/md";

const Customer = () => {
  return (
    <div>
      <div className={styles.customers_container}>
        <div className={styles.customer_headings}>
          <p>OUR HAPPY CUSTOMERS</p>
        </div>
        <div className={styles.customer_container}>
          <div className={styles.customer_box}>
            <p>★★★★</p>
            <p>
              Sarah M.
              <span>
                <MdVerified className={styles.customer_verified} />
              </span>
            </p>
            <p>
              "I'm blown away by the quality and style of the clothes I received
              from Shop.co. From casual wear to elegant dresses, every piece
              I've bought has exceeded my expectations."
            </p>
          </div>
          <div className={styles.customer_box}>
            <p>★★★★</p>
            <p>
              Alex K.{" "}
              <span>
                <MdVerified />
              </span>
            </p>
            <p>
              "I'm blown away by the quality and style of the clothes I received
              from Shop.co. From casual wear to elegant dresses, every piece
              I've bought has exceeded my expectations."
            </p>
          </div>
          <div className={styles.customer_box}>
            <p>★★★★</p>
            <p>
              James L.{" "}
              <span>
                <MdVerified />
              </span>
            </p>
            <p>
              "I'm blown away by the quality and style of the clothes I received
              from Shop.co. From casual wear to elegant dresses, every piece
              I've bought has exceeded my expectations."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customer;
