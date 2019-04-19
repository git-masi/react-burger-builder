import React from 'react';
import styles from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

export default function Toolbar() {
  return (
    <header className={styles.Toolbar}>
      <Logo/>
      {/* menu */}
      <NavigationItems/>
    </header>
  )
}
