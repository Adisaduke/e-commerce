import React from "react";
import { SlEqualizer } from "react-icons/sl";
import styles from "./Allreviews.module.css";
import COMMENTS from "./Arrays/Comments"; // Import the COMMENTS array
import { MdVerified } from "react-icons/md";
import { useState } from "react";

function Allreviews() {
  const [displayedComments, setDisplayedComments] = useState(10); // Initial number of comments to display

  const showMoreComments = () => {
    setDisplayedComments(displayedComments + 10); // Increment by 10 each time the button is clicked
  };

  return (
    <div>
      <div className={styles.ratings_review}>
        <p>Ratings & review</p>
        <hr className={styles.allreview_line} />
      </div>

      <div className={styles.review_container}>
        <div className={styles.review_numbers}>
          <p>
            All Reviews <span>[{COMMENTS.length}]</span>
          </p>
        </div>
        <div className={styles.review_right}>
          <div>
            <SlEqualizer className={styles.equalizer} />
          </div>
          <div class={styles.select_wrapper}>
            <select>
              <option value="option1">Latest</option>
              <option value="option2">Popular</option>
              <option value="option3">Option 3</option>
              <option value="option4">Option 4</option>
            </select>
          </div>
          <div className={styles.details_review_button}>
            <button>Write a Review</button>
          </div>
        </div>
      </div>
      <div className={styles.customer_container}>
        <div className={styles.customer_grid}>
          {COMMENTS.slice(0, displayedComments).map((comment, index) => (
            <div className={styles.customer_box} key={index}>
              <p>{comment.ratings}</p>{" "}
              <p>
                {comment.name}
                <span>
                  <MdVerified className={styles.customer_verified} />
                </span>
              </p>
              <p>{comment.comments}</p>
              <p>{comment.date}</p>
            </div>
          ))}
        </div>
      </div>
      {displayedComments < COMMENTS.length && (
        <div className={styles.load_more_button}>
          <button onClick={showMoreComments}>Load More Reviews</button>
        </div>
      )}
    </div>
  );
}

export default Allreviews;
