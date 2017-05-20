'use strict';

import {tabletMedia} from 'componentsShareStyle/style';

export default {
  width: '100%',
  height: '100%',
  ...tabletMedia({
    width: '100vw',
    height: '80vh'
  })
};
