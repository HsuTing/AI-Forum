'use strict';

import React from 'react';
import radium, {Style as StyleRadium} from 'radium';
import normalize from 'radium-normalize';

const a = {
  color: 'inherit',
  textDecoration: 'initial'
};

const all = {
  color: '#424242'
};

@radium
export default class Normalize extends React.Component {
  render() {
    return (
      <style>
        <StyleRadium rules={normalize} />
        <StyleRadium scopeSelector='a'
                     rules={a}
        />
        <StyleRadium scopeSelector='*'
                     rules={all}
        />
      </style>
    );
  }
}
