'use strict';

import React from 'react';
import Proptypes from 'prop-types';
import radium from 'radium';
import Link from 'cat-components/lib/Link';

import style from './style/icon';

@radium
export default class Icon extends React.Component {
  static propTypes = {
    style: Proptypes.object
  }

  render() {
    return (
      <Link to='/'
            style={style.link}
      >
        <svg {...this.props}
             viewBox='0 0 12 12'
             style={[style.svg, this.props.style]}
        >
          <text x='0'
                y='12'
                style={style.text}
          >AI</text>
        </svg>
      </Link>
    );
  }
}
