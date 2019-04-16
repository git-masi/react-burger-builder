import React from 'react';
import styles from './Modal.module.css';

const modal = props => {
  // let setStyles = [];
  // props.orderNow ? setStyles = [`${styles.modal}`] : setStyles = [`${styles.modal}`,`${styles.displayNone}`];

  // const displayOrderSummary = () => {
  //   if (props.orderNow) return `${props.children}`;
  // }

  return (
    // <div className={styles.modal} style={{display: props.orderNow ? 'flex' : 'none'}}>
    <div className={props.orderNow ? styles.modal : styles.displayNone}>
      {/* {displayOrderSummary} */}
      {props.children}
    </div>
  )
}

export default modal;