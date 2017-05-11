'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import radium from 'radium';
import Button from 'cat-components/lib/Button';

import {layout} from 'componentsShareStyle/style';

import style from './style/speaker';

@radium
export default class Speaker extends React.Component {
  static propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired
  }

  render() {
    const {img, title, content, website} = this.props;

    return (
      <div style={layout.col(6)}>
        <div style={layout.grid}>
          <div style={style.img(img)} />

          <div style={style.introduce}>
            <h1 style={style.title}>{title}</h1>
            <p style={style.content}>{content}</p>
            <Button style={style.button}
                    link={website}
            >網站</Button>
          </div>
        </div>
      </div>
    );
  }
}
