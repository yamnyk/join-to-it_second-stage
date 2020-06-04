import React from 'react';
import styles from './Preloader.module.scss'

const Preloader = props => {
  
  return (
    <div className={styles.Preloader}>
      <div className={[styles.Preloader, styles.PreloaderInner].join(' ')}/>
    </div>
  );
};

export default Preloader;