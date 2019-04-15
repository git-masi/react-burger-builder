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

  }

  render () {
    return (
      <Aux>
        <Burger ingredientsQuant = {this.state.ingredientsQuant}/>
        <BuildControls 
          ingredientAdded={this.addIngredientHandler}/>
      </Aux>
    );
  }
}

export default BurgerBuilder;