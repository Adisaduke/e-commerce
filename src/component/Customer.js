import React, { useState, useEffect } from "react";
import styles from "./Customer.module.css";
import { MdVerified } from "react-icons/md";
import COMMENTS from "./Arrays/Comments";

const Customer = () => {
  const [randomComments, setRandomComments] = useState([]);

  useEffect(() => {
    const shuffledComments = shuffleArray(COMMENTS);

    const selectedComments = shuffledComments.slice(0, 3);

    setRandomComments(selectedComments);
  }, []);

  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  return (
    <div>
      <div className={styles.customers_container}>
        <div className={styles.customer_headings}>
          <p>OUR HAPPY CUSTOMERS</p>
        </div>
        <div className={styles.customer_container}>
          {randomComments.map((comment, index) => (
            <div key={index} className={styles.customer_box}>
              <p>{comment.ratings}</p>
              <p>
                {comment.name}{" "}
                <span>
                  <MdVerified className={styles.customer_verified} />
                </span>
              </p>
              <p>"{comment.comments}"</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Customer;
