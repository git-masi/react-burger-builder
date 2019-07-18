import React from 'react';
import styles from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

export default function Toolbar(props) {
  return (
    <header className={styles.Toolbar}>
      <div className={styles.menu} onClick={props.click}>MENU</div>

      <Logo/>
      <NavigationItems/>
    </header>
  )
}
