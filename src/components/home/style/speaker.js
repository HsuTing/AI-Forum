'use strict';

import {color, tabletMedia} from 'componentsShareStyle/style';

export default {
  root: {
    ...tabletMedia({
      margin: '0px 0px 40px'
    })
  },

  img: link => ({
    width: '150px',
    height: '150px',
    margin: '0px 30px 0px 0px',
    background: `url(${link}) center / cover`,
    border: color.black,
    borderRadius: '50%',
    boxShadow: 'rgba(0, 0, 0, 0.4) 2px 2px 5px',
    ...tabletMedia({
      width: '100px',
      height: '100px'
    })
  }),

  introduce: {
    width: 'calc(100% - 200px)',
    ...tabletMedia({
      width: 'calc(100% - 150px)'
    })
  },

  title: {
    fontSize: '18px',
    lineHeight: '24px',
    margin: '0px 0px 20px',
    ...tabletMedia({
      margin: '0px 0px 10px'
    })
  },

  content: {
    fontSize: '15px',
    lineHeight: '28px',
    minHeight: '60px',
    ...tabletMedia({
      minHeight: '30px'
    })
  },

  button: {
    margin: '0px'
  }
};
