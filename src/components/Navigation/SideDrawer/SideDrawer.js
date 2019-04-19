import React from 'react';
import styles from './SideDrawer.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';

const sideDrawer = props => {
  //...
  return (
    <div className={styles.SideDrawer}>
      <Logo/>
      <NavigationItems/>
    </div>
  );
}

export default sideDrawer;