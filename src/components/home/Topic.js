'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import radium from 'radium';

import {layout} from 'componentsShareStyle/style';

import style from './style/topic';

@radium
export default class Topic extends React.Component {
  static propTypes = {
    icon: PropTypes.element.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
  }

  render() {
    const {icon, title, body} = this.props;

    return (
      <div style={[layout.col(4), layout.tablet_col(8)]}>
        <div style={style.root}>
          <div style={style.header}>
            {React.cloneElement(icon, {
              style: {
                ...style.icon,
                ...icon.props.style
              }
            })}

            <h4 style={style.title}>{title}</h4>
          </div>

          <p style={style.body}>{body}</p>
        </div>
      </div>
    );
  }
}
