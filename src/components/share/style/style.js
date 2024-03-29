'use strict';

export const color = {
  white: '#FFFFFF',
  black: '#000000',
  blue: '#2196F3',
  blue_200: '#90CAF9',
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

export const tabletMedia = style => ({
  '@media (max-width:839px)': style
});

export const layout = {
  grid: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%'
  },

  col: num => ({
    display: num === 0 ? 'none' : 'block',
    width: `calc(100% / 12 * ${num > 12 ? 12 : num})`
  }),

  tablet_col: num => ({
    ...tabletMedia({
      display: num === 0 ? 'none' : 'block',
      width: `calc(100% / 8 * ${num > 8 ? 8 : num})`
    })
  })
};

export const content = {
  root: {
    width: 'calc(100vw - 60px * 2)',
    padding: '120px 60px',
    ...tabletMedia({
      width: 'calc(100vw - 30px * 2)',
      padding: '60px 30px'
    })
  },

  title: {
    fontSize: '28px',
    lineHeight: '36px',
    margin: '0px 0px 60px'
  }
};
