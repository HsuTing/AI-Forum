'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import radium from 'radium';

import style from './style/img';

@radium
export default class Img extends React.Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    style: PropTypes.object,
    src: PropTypes.string,
    background: PropTypes.element
  }

  render() {
    const {children, src, background, ...props} = this.props;

    return (
      <div {...props}
           style={[style.root, props.style]}
      >
        {src !== undefined ?
          <div style={style.img(src)} /> :
          background
        }

        {React.cloneElement(children, {
          style: {
            ...style.content,
            ...children.props.style
          }
        })}
      </div>
    );
  }
}
