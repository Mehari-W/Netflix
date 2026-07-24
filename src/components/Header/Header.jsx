import { useEffect, useState } from "react";
import logo from "../../assets/Images/NetflixLogo.png";
import Netflix_avatar from "../../assets/Images/Netflix_avatar.png";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import styles from "./Header.module.css";

const navLinks = ["Home", "TV Shows", "Movies", "Games", "My Netflix"];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

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
              <img src={logo} alt="Netflix logo image" loading="eager" />
            </li>
            {navLinks.map((link) => (
              <li
                key={link}
                className={link === "Home" ? styles.active : ""}
              >
                {link}
              </li>
            ))}
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
                loading="eager"
              />
              <IoMdArrowDropdownCircle className={styles.dropdown_arrow} />
            </li>
          </ul>
        </div>

        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <HiMenu />
        </button>
      </div>

      {menuOpen && (
        <div className={styles.overlay} onClick={() => setMenuOpen(false)} />
      )}

      <div
        className={`${styles.mobile_menu} ${
          menuOpen ? styles.mobile_menu_open : ""
        }`}
      >
        <button
          className={styles.close_btn}
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          <IoClose />
        </button>

        <img src={logo} alt="Netflix logo" className={styles.mobile_logo} />

        <ul className={styles.mobile_nav_links}>
          {navLinks.map((link) => (
            <li
              key={link}
              className={link === "Home" ? styles.active : ""}
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </li>
          ))}
        </ul>

        <div className={styles.mobile_profile}>
          <img src={Netflix_avatar} alt="User Profile" loading="lazy" />
          <span>Profile</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
