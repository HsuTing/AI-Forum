'use strict';

import {color} from 'componentsShareStyle/style';

export default {
  img: link => ({
    width: '150px',
    height: '150px',
    margin: '0px 30px 0px 0px',
    background: `url(${link}) center / cover`,
    border: color.black,
    borderRadius: '50%',
    boxShadow: 'rgba(0, 0, 0, 0.4) 2px 2px 5px'
  }),

  introduce: {
    width: 'calc(100% - 200px)'
  },

  title: {
    fontSize: '18px',
    lineHeight: '24px',
    margin: '0px 0px 20px'
  },

  content: {
    fontSize: '15px',
    lineHeight: '28px',
    minHeight: '60px'
  },

  button: {
    margin: '0px'
  }
};
