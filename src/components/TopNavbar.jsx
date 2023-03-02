import { useState } from "react";
import logo from "../assets/logo.svg";
import profile from "../assets/user.jpg";
import notifications from "../assets/not.svg";
import plus from "../assets/plus.svg";
import FileUploader from "./FileUploader";

import styles from "../styles/TopNavbar.module.scss";

function TopNavbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  const handleModal = () => {
    setShowModal((prev) => !prev);
    setShowMenu(false);
  };
  return (
    <header className={styles.navigation}>
      <nav
        className={
          showMenu ? `${styles.navbar} ${styles.visible}` : styles.navbar
        }
      >
        <ul className={styles.menu}>
          <li className={styles.menuItem}>inicio</li>
          <li className={styles.menuItem}>series</li>
          <li className={styles.menuItem}>películas</li>
          <li className={styles.menuItem}>agregadas recientemente</li>
          <li className={styles.menuItem}>populares</li>
          <li className={styles.menuItem}>mis películas</li>
          <li className={styles.menuItem}>mi lista</li>
          <li className={styles.menuItem} onClick={(e) => handleModal(e)}>
            + agregar película
          </li>
          <li className={styles.menuItem}>cerrar sesión</li>
        </ul>
      </nav>
      <div
        className={
          showMenu ? `${styles.hamburger} ${styles.visible}` : styles.hamburger
        }
        onClick={(e) => toggleMenu(e)}
      >
        <span className={styles.line}></span>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
      </div>
      <img
        className={styles.logo}
        src={logo}
        width={98}
        height={30}
        alt="logo"
      />
      <div className={styles.addMovie} onClick={handleModal}>
        <img src={plus} width={14} height={14} alt="" />
        agregar película
      </div>

      <img
        className={styles.notifications}
        src={notifications}
        width={40}
        height={40}
        alt=""
      />
      <img
        className={styles.profile}
        style={{ borderRadius: 100 }}
        src={profile}
        width={45}
        height={45}
        alt="profile"
      />
      {showModal && <FileUploader handleModal={handleModal} />}
    </header>
  );
}

export default TopNavbar;
