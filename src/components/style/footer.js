'use strict';

import {color} from 'componentsShareStyle/style';

export default {
  root: {
    position: 'relative',
    width: 'calc(100vw - 80px * 2)',
    padding: '50px 80px',
    background: color.grey_200
  },

  arrowUpwardIcon: {
    position: 'absolute',
    right: '100px',
    top: '-18px',
    padding: '20px',
    color: color.grey,
    cursor: 'pointer',
    background: color.white,
    borderRadius: '50%'
  },

  icon: {
    width: '50px'
  }
};
