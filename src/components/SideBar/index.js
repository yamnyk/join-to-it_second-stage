import React from 'react';
import {Link} from "react-router-dom";
import styles from './SideBar.module.scss';
import {useLocation} from 'react-router-dom';

const SideBar = props => {
  const {items} = props,
    IconWrap = props => <div className={styles.SideBar__Icon}>{props.children}</div>,
    location = useLocation();
  
  const listItems = items.map(item => {
      let classList = [styles.SideBar__Item];
      
      if (item.linkURL === location.pathname) {
        classList.push(styles.SideBar__Item_Active)
      }
      
      classList = classList.join(' ');
      
      return (
        <li key={item.id} className={classList}>
          <IconWrap>{item.icon}</IconWrap>
          <Link to={item.linkURL} className={styles.SideBar__Link}>{item.text}</Link>
        </li>
      )
    }
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