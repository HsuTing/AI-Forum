'use strict';

import React from 'react';
import radium from 'radium';

import Normalize from 'componentsShare/Normalize';

@radium
export default class Index extends React.Component {
  render() {
    return (
      <div>
        <Normalize />
        This is Index!
      </div>
    );
  }
}
