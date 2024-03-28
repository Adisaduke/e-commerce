import React from "react";
import styles from './Footer.module.css'
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";


const Footer = () => {

    return (
        <div className={styles.footer}>
            <div className={styles.foooter_top}>
                <div className={styles.footerheader_container}>
                    <div className={styles.footerheader_content}>
                        <p>STAY UP TO DATE ABOUT<br /> OUR LATEST OFFERS</p>
                    </div>
                    <div className={styles.newsletter_container}>
                        <input placeholder="&#xf0e0; Enter your email address" type="text" />
                        <button>Subscribe to Newsletter</button>
                    </div>
                </div>
            </div>
            <div className={styles.footer_bottom_container}>
                <div className={styles.footer_container}>
                    <div className={styles.footer_bottom}>
                        <div className={styles.footer_left_side}>
                            <p>SHOP.CO</p>
                            <p>We have clothes that suits your style and<br /> which you're proud to wear from<br /> women to men</p>
                            <div className={styles.logo_container}>
                                <div><FaFacebook /></div>
                                <div><FaSquareXTwitter /></div>
                                <div><FaSquareInstagram /></div>
                                <div><FaLinkedin /></div>
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
    )

}

export default Footer