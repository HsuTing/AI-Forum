'use strict';

import {tabletMedia} from 'componentsShareStyle/style';

export default {
  root: {
    width: '100%',
    maxWidth: '280px',
    ...tabletMedia({
      maxWidth: 'initial',
      margin: '0px 0px 20px'
    })
  },

  header: {
    display: 'flex',
    alignItems: 'center',
    margin: '0px 0px 20px'
  },

  icon: {
    margin: '0px 20px 0px 0px'
  },

  title: {
    fontSize: '18px',
    lineHeight: '25px',
    margin: '0px'
  },

  body: {
    fontSize: '15px',
    lineHeight: '28px'
  }
};
