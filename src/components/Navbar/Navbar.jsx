import React from "react"
import styles from "./Navbar.module.css";
import Logo from "../../assets/logo.png";
import SearchBox from "../Searchbox/Searchbox";
import FeedbackButton from "../FeedbackButton/FeedbackButton";
import { Link } from "react-router-dom";

function Navbar(){
    const placeholder = "Search a album of your choice"
    return(
        <>
            <nav className={styles.navbar}>
                <div className={styles.logoDiv}><img  src={Logo} alt="logo" width={67}/></div>
                 <SearchBox search={"Search a song of your choice"}/>
                <FeedbackButton children="Give Feedback"/>
            </nav>
        </>
    )
}

export default Navbar;