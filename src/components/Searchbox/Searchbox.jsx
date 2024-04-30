
import React from "react";
import styles from "./Searchbox.module.css";
import {ReactComponent as SearchIcon} from "../../assets/Searchicon.svg";
export default function Searchbox({ placeholder }){
    const onSubmit = (e) => {
        e.preventDefault();
        
    }

    return(
        // <>
        //     <form onSubmit={onSubmit} className={styles.searchContainer}>
        //     <input type="text" className={styles.searchBar} id="searchBar" placeholder={placeholder} />
        //     <button className={styles.searchButton} type="submit" >
        //         <SearchIcon />
        //     </button>
          
        //     </form>
        // </>
        <form className={styles.wrapper}>
      <input className={styles.search} placeholder={placeholder}></input>
      <button className={styles.searchButton} type="submit">
        <SearchIcon />
      </button>
    </form>
    )
}
