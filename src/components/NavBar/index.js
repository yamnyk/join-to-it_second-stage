import React from 'react';
import styles from './NavBar.module.scss'

const NavBar = props => {
  const {user} = props;
  
  return (
    <div className={styles.NavBar}>
      <form action="" className={styles.NavBar__Search} onSubmit={e => e.preventDefault()}>
        <button className={styles.NavBar__SearchSubmit} type="submit">
          <i className={["fas fa-search", styles.NavBar__SearchIcon].join(' ')}/>
        </button>
        <input className={styles.NavBar__SearchInput} type="text" placeholder="Search transactions, invoices or help"/>
      </form>
      
      <div className={styles.NavBar__Navigation}>
        <div className={styles.NavBar__IconsList}>
          <i className={["far fa-life-ring", styles.NavBar__NavIcon].join(' ')}/>
          <i className={["fas fa-comments", styles.NavBar__NavIcon].join(' ')}/>
          <i className={["fas fa-bell", styles.NavBar__NavIcon, styles.NavBar__NavIcon_notifyed].join(' ')}/>
        </div>
        
        <div className={styles.NavBar__Profile}>
          <p className={styles.NavBar__UserName}>{user.name}</p>
          <img src={user.imgUrl} alt="user" className={styles.NavBar__Avatar}/>
        </div>
      </div>
    </div>
  );
};

export default NavBar;