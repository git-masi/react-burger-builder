import React from 'react';
import styles from './OrderSummary.module.css';
import Aux from '../../../hoc/Auxiliary';

const orderSummary = props => {

  let ingredientsList = []

  for (let key in props.ingredients) {
      ingredientsList.push(<li key={key + (Math.floor(Math.random() * 1000))}>{key}: {props.ingredients[key]}</li>);
  }

  return (
    <Aux>
      <h3>Your Order Summary</h3>
      <p>A delicious burger with: </p>
      <ul className={styles.list}>
        {ingredientsList}
      </ul>
    </Aux>
  )
}

export default orderSummary;