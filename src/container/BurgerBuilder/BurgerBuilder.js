import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
  lettuce: .25,
  bacon: 1.5,
  cheese: 1,
  meat: 3
};

class BurgerBuilder extends Component {
  state = {
    ingredientsQuant: {
      lettuce: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4
  }

  addIngredientHandler = (type) => {
    // update ingredient quantity
    const oldCount = this.state.ingredientsQuant[type];
    const updateCount = oldCount + 1;
    const updateIngredients = {
      ...this.state.ingredientsQuant
    }
    updateIngredients[type] = updateCount;
    
    // update ingredient price
    const price = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const updatePrice = oldPrice + price;

    // set state
    this.setState({ingredientsQuant: updateIngredients, totalPrice: updatePrice});
  }

  removeIngredientHandler = (type) => {
    // update ingredient quantity
    const oldCount = this.state.ingredientsQuant[type];
    // prevent state from being negative
    if(oldCount <= 0) return;
    const updateCount = oldCount - 1;
    const updateIngredients = {
      ...this.state.ingredientsQuant
    }
    updateIngredients[type] = updateCount;
    
    // update ingredient price
    const price = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const updatePrice = oldPrice - price;

    // set state
    this.setState({ingredientsQuant: updateIngredients, totalPrice: updatePrice});
  }

  render () {
    const disabledInfo = {
      ...this.state.ingredientsQuant
    }

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    // console.log(disabledInfo);

    return (
      <Aux>
        <Burger ingredientsQuant = {this.state.ingredientsQuant}/>
        <BuildControls 
          disabled = {disabledInfo}
          ingredientAdded = {this.addIngredientHandler}
          ingredientremoved = {this.removeIngredientHandler}
          />
      </Aux>
    );
  }
}

export default BurgerBuilder;