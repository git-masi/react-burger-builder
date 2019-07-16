import React from 'react';
import styles from './SideDrawer.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Auxiliary';

const sideDrawer = props => {
  let drawerClasses = [styles.SideDrawer, styles.Close];
  if (props.show) drawerClasses = [styles.SideDrawer, styles.Open];

  return (
    <Aux>
      <Backdrop show={props.show} closeModal={props.showSideDrawerHandler}/>
      <div className={drawerClasses.join(' ')}>
        <Logo/>
        <NavigationItems/>
      </div>
    </Aux>
  );
}

export default sideDrawer;