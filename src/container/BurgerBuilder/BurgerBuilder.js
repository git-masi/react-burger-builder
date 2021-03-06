import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../axios-order';

const INGREDIENT_PRICES = {
  lettuce: .25,
  bacon: 1.5,
  cheese: 1,
  meat: 3
};

class BurgerBuilder extends Component {
  state = {
    ingredientsQuant: null,
    totalPrice: 4,
    purchasable: false,
    orderNow: false,
    loading: false,
    error: false,
  }

  componentDidMount () {
    axios.get('https://react-burger-builder-e00d8.firebaseio.com/ingredients.json')
      .then(response => {
        this.setState({ingredientsQuant: response.data});
      })
      .catch(error => {
        console.log(error);
        this.setState({error: true})
      });
  }

  continuePurchaseHandler = () => {
    this.setState({ loading: true });
    const order = {
      ingredients: this.state.ingredientsQuant,
      // in a real app price should be calculated on the server
      // if not, the customer could potentially manipulate the order
      price: this.state.totalPrice,
      customer: {
        name: 'Some Guy',
        address: {
          street: '123 some st',
          zipCode: '21211',
          country: 'USA',
        },
        email: 'guy@someemail.com',
      },
      deliveryMethod: 'fastest',
    }
    axios.post('/orders.json', order)
      .then(response => {
        this.setState({ loading: false, orderNow: false });
        console.log(response);
      })
      .catch(err => {
        this.setState({ loading: false, orderNow: false })
        console.log(err);
      });
  }

  closeModalHandler = () => {
    this.setState({orderNow: false});
  }

  orderButtonHandler = () => {
    // const orderNowState = this.state.orderNow;
    // const updateOrderNow = !orderNowState;
    // this.setState({orderNow: updateOrderNow})
    this.setState({orderNow: true});
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

    let orderSummary = null;
    
    let burger = this.state.error ? <p>Sorry, can't show ingredients</p> : <Spinner />;

    if (this.state.ingredientsQuant) {
      burger = (
        <Aux>
          <Burger ingredientsQuant = {this.state.ingredientsQuant}/>
          <BuildControls 
            disabled = {disabledInfo}
            ingredientAdded = {this.addIngredientHandler}
            ingredientremoved = {this.removeIngredientHandler}
            totalPrice = {this.state.totalPrice}
            purchasable = {this.state.purchasable}
            orderNow = {this.orderButtonHandler}
            />
        </Aux>
      );

      orderSummary = (
        <OrderSummary 
          price = {this.state.totalPrice}
          continuePurchase = {this.continuePurchaseHandler}
          cancelPurchase = {this.closeModalHandler}
          ingredients = {this.state.ingredientsQuant}
        />
      );
    }

    if (this.state.loading) {
      orderSummary = <Spinner/>
    }

    return (
      <Aux>
        <Modal orderNow = {this.state.orderNow} closeModal={this.closeModalHandler}>
          {orderSummary}
        </Modal>
        {burger}
      </Aux>
    );
  }
}

export default withErrorHandler(BurgerBuilder, axios);