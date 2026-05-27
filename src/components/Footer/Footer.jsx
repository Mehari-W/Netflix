// import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <div className={styles["footer_outer_container"]}>
      <div className={styles["footer_inner_container"]}>
        <div className={styles["footer-icons"]}>
          <FaFacebook className={styles["icon-spacing"]} />
          <FaSquareInstagram className={styles["icon-spacing"]} />
          <FaYoutube className={styles["icon-spacing"]} />
        </div>
        <div className={styles["footer_data"]}>
          <div>
            <ul>
              <li>Audio Description</li>
              <li>Investor Relations</li>
              <li>Legal Notice</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Help Center</li>
              <li>Jobs</li>
              <li>Cookie Preferences</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Gift Cards</li>
              <li>Terms of Use</li>
              <li>Corporate Information</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Media Center</li>
              <li>Privacy</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
        <div className={styles["service_code"]}>
          <p>Service Code</p>
        </div>
        <div className={styles["copy-write"]}>&copy; 1997-2024 Netflix, Inc.</div>
      </div>
    </div>
  );
};

export default Footer;
