'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import {StyleRoot} from 'radium';

import style from './style/img';

export class ImgContent extends React.Component {
  static propTypes = {
    style: PropTypes.object
  }

  render() {
    return (
      <StyleRoot {...this.props}
                 style={[style.content, this.props.style]}
      />
    );
  }
}

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
      <StyleRoot {...props}
                 style={[style.root, props.style]}
      >
        {React.createElement(StyleRoot, {
          ...children.props,
          style: {
            ...style.content,
            ...children.props.style
          }
        })}

        {src !== undefined ?
          <div style={style.img(src)} /> :
          background
        }
      </StyleRoot>
    );
  }
}
