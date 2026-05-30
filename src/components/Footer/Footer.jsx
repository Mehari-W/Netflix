import { FaFacebook, FaYoutube } from "react-icons/fa";
import { FaSquareInstagram, FaXTwitter } from "react-icons/fa6"; 
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer_outer_container}>
      <div className={styles.footer_inner_container}>
        
        {/* Social Media Icons */}
        <div className={styles.footer_icons}>
          <FaFacebook className={styles.icon_spacing} />
          <FaSquareInstagram className={styles.icon_spacing} />
          <FaXTwitter className={styles.icon_spacing} /> 
          <FaYoutube className={styles.icon_spacing} />
        </div>

        <div className={styles.footer_data}>
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
              <li>Ad Choices</li> 
              <li>Contact Us</li>
            </ul>
          </div>
        </div>

    
        <div className={styles.service_code}>
          <p>Service Code</p>
        </div>
        
        <div className={styles.copy_write}>
          &copy; 1997-2026 Netflix, Inc. 
        </div>
        
      </div>
    </div>
  );
};

export default Footer;