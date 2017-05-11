'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import radium from 'radium';

import style from './style/AI-icon.js';

@radium
export default class AI extends React.Component {
  static propTypes = {
    style: PropTypes.object
  }

  render() {
    return (
      <svg viewBox='0 0 40 40'
           style={[style.svg, this.props.style]}
      >
        <text x='20'
              y='24'
              style={style.text}
        >icon</text>
      </svg>
    );
  }
}
