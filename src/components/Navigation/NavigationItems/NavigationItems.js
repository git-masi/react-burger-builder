import React from 'react';
import styles from './NavigationItems.module.css';

export default function NavigationItems() {
  return (
    <div className={styles.NavigationItems}>
      <a href="#">Burger Builder</a>
      <a href="#">Checkout</a>
    </div>
  )
}
