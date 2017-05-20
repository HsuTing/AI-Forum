'use strict';

import {color, tabletMedia} from 'componentsShareStyle/style';

export default {
  root: {
    width: 'calc(100vw - 150px * 2)',
    maxWidth: '1800px',
    padding: '120px 150px',
    margin: '0 auto',
    ...tabletMedia({
      width: 'calc(100vw - 30px * 2)',
      padding: '30px 30px 0px'
    })
  },

  container: {
    width: '100%',
    height: '100%'
  },

  icon: {
    width: '120px'
  },

  title: {
    margin: '30px 0px',
    maxWidth: '450px',
    fontSize: '28px',
    lineHeight: '30px'
  },

  date: {
    margin: '0px',
    fontSize: '18px',
    fontWeight: 'normal',
    lineHeight: '25px'
  },

  location: {
    margin: '0px',
    fontSize: '15px',
    fontWeight: 'normal',
    lineHeight: '28px'
  },

  block: {
    padding: '40px',
    maxWidth: '400px',
    boxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.24), 0 0 4px 0 rgba(0, 0, 0, 0.14)',
    ...tabletMedia({
      position: 'relative',
      left: '-30px',
      margin: '50px 0px 0px',
      padding: '30px',
      width: 'calc(100vw - 30px * 2)',
      maxWidth: 'initial',
      background: color.grey_200,
      boxShadow: '0 0px 0px 0'
    })
  },

  block_title: {
    fontSize: '24px',
    lineHeight: '30px'
  },

  block_content: {
    fontSize: '15px',
    lineHeight: '31px'
  },

  button: {
    margin: '0px',
    padding: '10px 25px',
    color: color.white,
    background: color.blue,
    ...tabletMedia({
      display: 'none'
    })
  }
};
