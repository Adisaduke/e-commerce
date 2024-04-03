import React from "react";
import Productdetails from "./ProductDetails";
import Allreviews from "./Allreviews";
import image11 from "./Assets/image 11.png";
import image12 from "./Assets/image 12.png";
import image13 from "./Assets/image 13.png";
import image14 from "./Assets/image 14.png";
import styles from "./Productreviews.module.css";

function Productreviews() {
  const TOP_SELLING = [
    {
      product_name: "T-shirt with Tape Details",
      image: image11,
      ratings: 5,
      price: "$120",
    },
    {
      product_name: "Skinny Fit Jeans",
      image: image12,
      ratings: 4,
      price: "$240",
      previous_price: "$260",
      discount: "-20%",
    },
    {
      product_name: "Checkered Shirt",
      image: image13,
      ratings: 4,
      price: "$180",
    },
    {
      product_name: "Sleeve Striped T-shirt",
      image: image14,
      ratings: 5,
      price: "$130",
      previous_price: "$160",
      discount: "-30%",
    },
  ];

  return (
    <div>
      <Productdetails />
      <Allreviews />
      <div>
        <div className={styles.other_options}>
          <div className={styles.option_headings}>
            <h1>YOU MIGHT ALSO LIKE</h1>
          </div>
          <div className={styles.arrivals_container}>
            {TOP_SELLING.map((newArrival, index) => (
              <div className={styles.eachArrivals} key={index}>
                <div className={styles.image_names}>
                  <div whileHover={{ scale: 1.1 }}>
                    <img src={newArrival.image} alt={newArrival.product_name} />
                  </div>
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Productreviews;
