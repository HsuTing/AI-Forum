'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import radium from 'radium';

import style from './style/organizer';

@radium
export default class Organizer extends React.Component {
  static propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
  }

  render() {
    const {img, title, link} = this.props;

    return (
      <a style={style.root}
         href={link}
         target='_blank'
      >
        <div style={style.container}>
          <img src={img}
               style={style.img}
          />

          <div style={style.title}
          >{title}</div>
        </div>
      </a>
    );
  }
}
