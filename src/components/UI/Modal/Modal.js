import React, { Component } from 'react';
import styles from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';
import Aux from '../../../hoc/Auxiliary';

class Modal extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.orderNow !== this.props.orderNow || nextProps.children !== this.props.children;
  }

  render() {
    return (
      <Aux>
        <div className={this.props.orderNow ? styles.modal : styles.displayNone}>
          {this.props.children}
        </div>
        <Backdrop show={this.props.orderNow} closeModal={this.props.closeModal}/>
      </Aux>
    )
  }
}

export default Modal;