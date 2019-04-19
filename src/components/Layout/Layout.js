import React from 'react';
// could also use fragments here
import Aux from '../../hoc/Auxiliary';
import styles from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const layout = props => (
  <Aux>
    <Toolbar/>
    {/* <main className={`${styles.content} ${styles.red}`}> */}
    <main className={styles.content}>
      {props.children}
    </main>
  </Aux>
);

export default layout;