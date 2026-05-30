import { useEffect, useState } from "react";
import logo from "../../assets/Images/NetflixLogo.png";
import Netflix_avatar from "../../assets/Images/Netflix_avatar.png";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import styles from "./Header.module.css";

const HEADER = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`${styles.header_outer_container} ${
        isScrolled ? styles.dark : ""
      }`}
    >
      <div className={styles.header_container}>
        <div className={styles.header_left}>
          <ul>
            <li>
              <img src={logo} alt="Netflix logo image" />
            </li>
            <li className={styles.active}>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>Games</li>
            <li>My Netflix</li>
          </ul>
        </div>

        <div className={styles.header_right}>
          <ul>
            <li>
              <IoSearchOutline />
            </li>
            <li>
              <IoMdNotificationsOutline />
            </li>
            <li className={styles.profile_container}>
              <img
                src={Netflix_avatar}
                alt="User Profile"
                className={styles.profile_icon}
                style={{ width: "auto", height: "auto", objectFit: "cover" }}
              />
              <IoMdArrowDropdownCircle className={styles.dropdown_arrow} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HEADER;
