// import React from "react";
import logo from "../../assets/Images/NetflixLogo.png";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineAccountBox } from "react-icons/md";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import styles from "./Header.module.css";
const HEADER = () => {
  return (
    <>
      <div className={styles["header_outer_container"]}>
        <div className={styles["header_container"]}>
          <div className={styles["header_left"]}>
            <ul>
              <li>
                <img src={logo} alt="Netflix logo image" />
              </li>
              <li>Netflix</li>
              <li>Home</li>
              <li>Tv shows</li>
              <li>Movies</li>
              <li>Latest</li>
              <li>My List</li>
              <li>Browse by Language</li>
            </ul>
          </div>
          <div className={styles["header_right"]}>
            <ul>
              <li>
                <IoSearchOutline />
              </li>
              <li>
                <IoMdNotificationsOutline />
              </li>
              <li>
                <MdOutlineAccountBox />
              </li>
              <li>
                <IoMdArrowDropdownCircle />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
};

export default HEADER;
