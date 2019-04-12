import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import styles from './Burger.module.css';

const burger = props => {
  return (
    <div className={styles.burger}>
      <BurgerIngredient type="bread-top" />
      <BurgerIngredient type="bread-cheese" />
      <BurgerIngredient type="bread-meat" />
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
}

export default burger;