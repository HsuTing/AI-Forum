'use strict';

export const color = {
  white: '#FFFFFF',
  black: '#000000',
  blue: '#2196F3',
  indigo: '#3F51B5',
  cyan: '#00BCD4',
  yellow: '#FFEB3B',
  deepPurple: '#673AB7',
  grey_200: '#EEEEEE',
  grey: '#9E9E9E'
};

export const boxShadow = {
  boxShadow: '1px 0 5px rgba(0, 0, 0, 0.2)'
};

export const layout = {
  grid: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%'
  },

  col: num => ({
    width: `calc(100% / 12 * ${num > 12 ? 12 : num})`
  })
};

export const content = {
  root: {
    width: 'calc(100vw - 60px * 2)',
    padding: '120px 60px'
  },

  title: {
    fontSize: '28px',
    lineHeight: '36px',
    margin: '0px 0px 60px'
  }
};
