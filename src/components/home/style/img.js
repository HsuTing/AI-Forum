'use strict';

import {color, tabletMedia} from 'componentsShareStyle/style';

export default {
  root: {
    position: 'relative',
    width: '100vw',
    height: '80vh',
    ...tabletMedia({
      position: 'initial',
      height: 'initial'
    })
  },

  img: link => ({
    width: '100%',
    height: '100%',
    background: link ? `url(${link}) center / cover` : color.indigo,
    ...tabletMedia({
      height: '80vh'
    })
  }),

  content: {
    position: 'absolute',
    top: '-50px',
    right: '100px',
    minWidth: '280px',
    padding: '40px',
    background: color.blue,
    color: color.white,
    ...tabletMedia({
      position: 'initial',
      padding: '30px'
    })
  },

  title: {
    fontSize: '28px',
    lineHeight: '36px',
    margin: '0px 0px 30px',
    color: color.white
  },

  body: {
    maxWidth: '280px',
    fontSize: '15px',
    lineHeight: '28px',
    color: color.white,
    ...tabletMedia({
      maxWidth: 'initial'
    })
  }
};
