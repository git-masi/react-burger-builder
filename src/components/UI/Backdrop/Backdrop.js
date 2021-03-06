import React from 'react';
import styles from './Backdrop.module.css';

const backdrop = props => {
  return (
    props.show ? <div className={styles.backdrop} onClick={props.closeModal}></div> : null
  )
}

export default backdrop;