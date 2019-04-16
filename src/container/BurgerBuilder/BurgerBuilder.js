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
    totalPrice: 4,
    purchasable: false
  }

  updatePurchaseStateHandler = (ingredients) => {
    const quant = ingredients;
    let updatePurchase;
    for (let key in quant) {
      if (quant[key] !== 0) {
        updatePurchase = true;
        break
      } else {
        updatePurchase = false;
      }
    }
    this.setState({purchasable: updatePurchase})
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

    // update purchase state
    // this is a hack because the state is not being updated quickly enough
    // I should probably be using something like component did mount though, idk
    // setTimeout(this.updatePurchaseStateHandler,1)
    // or pass the ingredients into the function
    this.updatePurchaseStateHandler(updateIngredients);
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

    // update purchase state
    // this is a hack because the state is not being updated quickly enough
    // I should probably be using something like component did mount though, idk
    // setTimeout(this.updatePurchaseStateHandler,1)
    // or pass the ingredients into the function
    this.updatePurchaseStateHandler(updateIngredients);
  }

  render () {
    const disabledInfo = {
      ...this.state.ingredientsQuant
    }

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    return (
      <Aux>
        <Burger ingredientsQuant = {this.state.ingredientsQuant}/>
        <BuildControls 
          disabled = {disabledInfo}
          ingredientAdded = {this.addIngredientHandler}
          ingredientremoved = {this.removeIngredientHandler}
          totalPrice = {this.state.totalPrice}
          purchasable = {this.state.purchasable}
          />
      </Aux>
    );
  }
}

export default BurgerBuilder;