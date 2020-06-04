import React from 'react';
import styles from './NavBar.module.scss'

const NavBar = props => {
  const {user} = props;
  
  return (
    <div className={styles.NavBar}>
      <form action="" className={styles.NavBar__Search}>
        <button className={styles.NavBar__SearchSubmit} type="submit">
          <i className={["fas fa-search", styles.NavBar__SearchIcon].join(' ')}/>
        </button>
        <input className={styles.NavBar__SearchInput} type="text" placeholder="Search transactions, invoices or help"/>
      </form>
      <img src={user.imgUrl} alt="user" className={styles.NavBar__Avatar}/>
    </div>
  );
};

export default NavBar;