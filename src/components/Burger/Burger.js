import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import styles from './Burger.module.css';

const burger = props => {
  function makeArr(obj) {
    const objKeysArr = Object.keys(obj);
    const objValuesArr = Object.values(obj);
    const ingredientsArr = [];
    objKeysArr.forEach((el, index) => {
      for (let i = 0; i < objValuesArr[index]; i++) {
        ingredientsArr.push(<BurgerIngredient type={el} key={el+i+Math.floor(Math.random() * 10000)}/>); 
      }
    });
    return ingredientsArr;
  }

  const transformedIngredients = makeArr(props.ingredientsQuant);
  
  return (
    <div className={styles.burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
}

export default burger;