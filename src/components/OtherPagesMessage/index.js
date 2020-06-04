import React from 'react';
import {Link} from "react-router-dom";
import styles from './OtherPagesMessage.module.scss'
import Preloader from "../Preloader";

const OtherPagesMessage = () => {
  return (
    <div className={styles.Message}>
      <div className={styles.MessageContainer}>
        <h1 className={styles.MessageTitle}>This page is not available yet</h1>
        <p>Please follow the <Link to={'/calendar'}>link</Link> to see the Calendar functioning</p>
        <Preloader/>
      </div>
    </div>
  );
};

export default OtherPagesMessage;