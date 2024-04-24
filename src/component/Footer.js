import React, { useState } from "react";
import styles from "./Footer.module.css";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import Alert from "../component/ui/Alert";

const Footer = () => {
  const [emailInput, setEmailInput] = useState("");
  const [emailValid, setEmailValid] = useState(true);
  const [showAlert, setShowAlert] = useState(false);
  const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput);

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  const EmailInputHandler = (e) => {
    const emailtyped = e.target.value;
    setEmailInput(emailtyped);
  };

  const NewsletterSubmitHandler = () => {
    if (!isValid) {
      setEmailValid(false);
      return;
    }

    setEmailValid(true);
    setEmailInput("");
    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };
  return (
    <div className={styles.footer}>
      <div className={styles.foooter_top}>
        <div className={styles.footerheader_container}>
          <div className={styles.footerheader_content}>
            <p>
              STAY UP TO DATE ABOUT
              <br /> OUR LATEST OFFERS
            </p>
          </div>
          {showAlert && <Alert message="Thanks for joining us!" />}
          <div className={styles.newsletter_container}>
            <input
              placeholder="&#xf0e0; Enter your email address"
              type="text"
              value={emailInput}
              onChange={EmailInputHandler}
              className={!emailValid ? styles.newsletter_error : ""}
            />
            {!emailValid && (
              <p className={styles.email_eror_message}>Enter a valid email</p>
            )}
            <button onClick={NewsletterSubmitHandler}>
              Subscribe to Newsletter
            </button>
          </div>
        </div>
      </div>
      <div className={styles.footer_bottom_container}>
        <div className={styles.footer_container}>
          <div className={styles.footer_bottom}>
            <div className={styles.footer_left_side}>
              <p>SHOP.CO</p>
              <p>
                We have clothes that suits your style and
                <br /> which you're proud to wear from
                <br /> women to men
              </p>
              <div className={styles.logo_container}>
                <div>
                  <a href="www.facebook.com">
                    <FaFacebook className={styles.individual_social_page} />
                  </a>
                </div>
                <div>
                  <a href="www.twitter.com">
                    <FaSquareXTwitter
                      className={styles.individual_social_page}
                    />
                  </a>
                </div>
                <div>
                  <a href="www.instagram.com">
                    <FaSquareInstagram
                      className={styles.individual_social_page}
                    />
                  </a>
                </div>
                <div>
                  <a href="www.linkdin.com">
                    <FaLinkedin className={styles.individual_social_page} />
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.company_names}>
              <div className={styles.footer_menu}>
                <p>COMPANY</p>
                <p>About</p>
                <p>Features</p>
                <p>Works</p>
                <p>Career</p>
              </div>
              <div className={styles.footer_menu}>
                <p>HELP</p>
                <p>Customer Support</p>
                <p>Delivery Details</p>
                <p>Terms & Conditions</p>
                <p>Privacy Policy</p>
              </div>
              <div className={styles.footer_menu}>
                <p>FAQ</p>
                <p>Account</p>
                <p>Manage Deliveries</p>
                <p>Orders</p>
                <p>Payments</p>
              </div>
              <div className={styles.footer_menu}>
                <p>RESOURCES</p>
                <p>Free eBooks</p>
                <p>Development Tutorial</p>
                <p>How to - Blog</p>
                <p>Youtube Playlist</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
