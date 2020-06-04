import React from 'react';
import {Link} from "react-router-dom";
import styles from './SideBar.module.scss'

const SideBar = props => {
  const IconWrap = props => <div className={styles.SideBar__Icon}>{props.children}</div>;
  const listItems = props.items.map(item => (
      <li key={item.id} className={styles.SideBar__Item}>
        <IconWrap>{item.icon}</IconWrap>
        <Link to={item.linkURL} className={styles.SideBar__Link}>{item.text}</Link>
      </li>
    )
  );
  return (
    <div className={styles.SideBar}>
      <Link to={"/"} className={[styles.SideBar__company, styles.SideBar__Link].join(' ')}>IMPEKABLE</Link>
      
      <ul className={styles.SideBar__List}>
        {listItems}
      </ul>
    </div>
  );
};

export default SideBar;