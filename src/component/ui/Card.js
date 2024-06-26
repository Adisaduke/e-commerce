import styles from "./Card.module.css";
import React from "react";
import PropTypes from "prop-types";

const Card = ({ children }) => {
  return <div className={styles.card}>{children}</div>;
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Card;
