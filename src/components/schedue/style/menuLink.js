'use strict';

import {color} from 'componentsShareStyle/style';

export default {
  link: isClick => ({
    display: 'inline-block',
    padding: '14px',
    borderBottom: `3px solid ${isClick ? color.blue : color.white}`,
    ':hover': {
      borderBottom: `3px solid ${color.blue_200}`
    }
  })
};
