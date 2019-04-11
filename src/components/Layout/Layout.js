import React from 'react';
// could also use fragments here
import Aux from '../../hoc/Auxiliary';
import styles from './Layout.module.css';

const layout = props => (
  <Aux>
    <div className={styles.content}>toolbar, sidedrawer, backdrop</div>
    <main className={`${styles.content} ${styles.red}`}>
      {props.children}
    </main>
  </Aux>
);

export default layout;