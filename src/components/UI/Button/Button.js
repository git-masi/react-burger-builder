import React from 'react';
import styles from './Button.module.css';

const button = props => {
  return (
    <button 
      className={props.text === 'continue' ? styles.continue : styles.cancel }
      onClick={props.clicked}
      >{props.text}
    </button>
  )
}

export default button;