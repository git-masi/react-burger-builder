import React, { Component } from 'react';
import styles from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';
import Aux from '../../../hoc/Auxiliary';

class Modal extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.orderNow !== this.props.orderNow;
  }

  // let setStyles = [];
  // props.orderNow ? setStyles = [`${styles.modal}`] : setStyles = [`${styles.modal}`,`${styles.displayNone}`];

  // const displayOrderSummary = () => {
  //   if (props.orderNow) return `${props.children}`;
  // }

  render() {
    return (
      // <div className={styles.modal} style={{display: props.orderNow ? 'flex' : 'none'}}>
      <Aux>
        <div className={this.props.orderNow ? styles.modal : styles.displayNone}>
          {/* {displayOrderSummary} */}
          {this.props.children}
          {/* <button onClick={props.closeModal}>Back To Order</button> */}
        </div>
        <Backdrop show={this.props.orderNow} closeModal={this.props.closeModal}/>
      </Aux>
    )
  }
}

export default Modal;