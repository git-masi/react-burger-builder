import React, { Component } from 'react';
// could also use fragments here
import Aux from '../../hoc/Auxiliary';
import styles from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
  state = {
    show: false
  }

  showSideDrawerHandler = () => {
    this.setState({show: !this.state.show});
  }

  render () {
    return (
      <Aux>
        <Toolbar/>
        <SideDrawer show={this.state.show} showSideDrawerHandler={this.showSideDrawerHandler}/>
        {/* <main className={`${styles.content} ${styles.red}`}> */}
        <main className={styles.content}>
          {this.props.children}
        </main>
      </Aux>
    );
  }
}

export default Layout;