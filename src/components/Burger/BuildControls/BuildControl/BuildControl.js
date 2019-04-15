import React from 'react';
import styles from './BuildControl.module.css';

const buildControl = props => {
  return (
    <div className={styles.controlComponent}>
      <div className={styles.label}>{props.label}</div>
      <button className={styles.btn__less}>Less</button>
      <button onClick={props.added} className={styles.btn__more}>More</button>
    </div>
  )
}

export default buildControl;