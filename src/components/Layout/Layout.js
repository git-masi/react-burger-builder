import React from 'react';
// could also use fragments here
import Aux from '../../hoc/auxiliary';

const layout = props => (
  <Aux>
    <div>toolbar, sidedrawer, backdrop</div>
    <main>
      {props.children};
    </main>
  </Aux>
);

export default layout;