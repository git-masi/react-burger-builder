import React from 'react';
import styles from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';
import Aux from '../../../hoc/Auxiliary';

const modal = props => {
  // let setStyles = [];
  // props.orderNow ? setStyles = [`${styles.modal}`] : setStyles = [`${styles.modal}`,`${styles.displayNone}`];

  // const displayOrderSummary = () => {
  //   if (props.orderNow) return `${props.children}`;
  // }

  return (
    // <div className={styles.modal} style={{display: props.orderNow ? 'flex' : 'none'}}>
    <Aux>
      <div className={props.orderNow ? styles.modal : styles.displayNone}>
        {/* {displayOrderSummary} */}
        {props.children}
        {/* <button onClick={props.closeModal}>Back To Order</button> */}
      </div>
      <Backdrop show={props.orderNow} closeModal={props.closeModal}/>
    </Aux>
  )
}

export default modal;