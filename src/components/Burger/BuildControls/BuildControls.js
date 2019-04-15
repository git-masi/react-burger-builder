import React from 'react';
import styles from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  {label: 'meat', type: 'meat'},
  {label: 'bacon', type: 'bacon'},
  {label: 'cheese', type: 'cheese'},
  {label: 'lettuce', type: 'lettuce'},
];

const buildControls = props => {
  return (
    <div className={styles.buildControls}>
      {controls.map(el => (
        <BuildControl
          key = {el.label}
          label = {el.label}
          added = {() => props.ingredientAdded(el.type)}
          removed = {() => props.ingredientremoved(el.type)}
          disabled = {props.disabled[el.type]}
        />
      ))}
    </div>
  )
}

export default buildControls;