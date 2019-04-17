import React from 'react';
import styles from './OrderSummary.module.css';
import Aux from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';

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
      <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
      <p>Continue to checkout</p>
      <Button text="continue" clicked={props.continuePurchase}/>
      <Button text="cancel" clicked={props.cancelPurchase}/>
    </Aux>
  )
}

export default orderSummary;