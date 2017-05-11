'use strict';

import React from 'react';
import radium from 'radium';
import ArrowUpwardIcon from 'react-icons/lib/md/arrow-upward';
import GoTo from 'cat-components/lib/GoTo';

import Icon from 'componentsShareIcon/Icon';
import {boxShadow} from 'componentsShareStyle/style';

import style from './style/footer';

@radium
export default class Footer extends React.Component {
  render() {
    return (
      <footer style={style.root}>
        <GoTo main='body'>
          <ArrowUpwardIcon style={{...style.arrowUpwardIcon, ...boxShadow}} />
        </GoTo>

        <Icon style={style.icon} />
      </footer>
    );
  }
}
