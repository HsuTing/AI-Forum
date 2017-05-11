'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Wrapper from 'cat-components/lib/Wrapper';

import Index from 'components/Index';

(() => {
  /* eslint-disable no-undef */
  ReactDOM.render(
    <Wrapper>
      <Index basename={basename} />
    </Wrapper>,
    document.getElementById('root')
  );
  /* eslint-enable */
})();
