import React from 'react';
import styles from './Logo.module.css';
import BurgerLogo from './../../assets/images/burger-logo.png';

export default function Logo() {
  return (
    <div className={styles.LogoWrapper}>
      <img src={BurgerLogo} alt="burger logo"/>
    </div>
  )
}
