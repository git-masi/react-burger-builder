import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
  state = {
    ingredientsQuant: {
      lettuce: 1,
      cheese: 2,
      meat: 2
    }
  }

  render () {
    return (
      <Aux>
        <Burger ingredientsQuant = {this.state.ingredientsQuant}/>
        <div>build controls</div>
      </Aux>
    );
  }
}

export default BurgerBuilder;