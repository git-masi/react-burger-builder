import React from 'react';
import styles from './BurgerIngredient.module.css';

const burgerIngredient = props => {
  let ingredient = null;
  
  switch (props.type) {
    case ('bread-top'):
      ingredient = <div className={styles.breadBottom}></div>;
      break;
  }

  return (

  )
};

export default burgerIngredient;