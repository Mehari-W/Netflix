import React from "react";
import styles from "./Header.module.css";
import logo from "../assets/NetflixLogo.png";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineAccountBox } from "react-icons/md";
import { IoMdArrowDropdownCircle } from "react-icons/io";
const HEADER = () => {
  return (
    <div>
      <div className={styles["header-outer-container"]}>
        <div className={styles["header-container"]}>
          <div className={styles["header-left"]}>
            <ul>
              <li>
                <img src={logo} alt="Netflix logo image" />
              </li>
              <li>netflix</li>
              <li>Home</li>
              <li>Tv shows</li>
              <li>Movies</li>
              <li>Latest</li>
              <li>My List</li>
              <li>Browse by Language</li>
            </ul>
          </div>
          <div className={styles["header-right"]}>
            {" "}
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
    </div>
  );
};

export default HEADER;
