'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import radium from 'radium';
import {Route} from 'react-router-dom';
import Link from 'cat-components/lib/Link';

import style from './style/menuLink';

@radium
export default class MenuLink extends React.Component {
  static propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
  }

  render() {
    const {to, children} = this.props;

    return (
      <Route path={to}
             children={({match}) => (
               <Link to={to}
                     style={style.link(match)}
               >{children}</Link>
             )}
             exact
      />
    );
  }
}
