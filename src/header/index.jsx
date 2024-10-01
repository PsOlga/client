
import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css"
import logo from "../assets/header-img/logo.svg";
import basket from "../assets/header-img/Basket.svg"
const Header = () => {

  
  return (
    <header className={styles.header}>
      <div className={styles.headerLogo}>
        <Link to="/">
        <img src={logo}></img>
        </Link>
      </div>
      <nav className={styles.headerNav}>
      <Link to="/pages/home" className={styles.linkHeader}>Main Page</Link>
        <Link to="/pages/categories" className={styles.linkHeader}>Categories</Link>
        <Link to="/pages/allProductsPage" className={styles.linkHeader}>All products</Link>
        <Link to="/pages/salePage" className={styles.linkHeader}>All sales</Link>
      </nav>
      <div className={styles.basketHeader}>
      <Link to="/cart">
        <img src={basket}></img>
        </Link>
      </div>
    </header>
  );
};
export default Header;

