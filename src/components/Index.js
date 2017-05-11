'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import radium from 'radium';
import {BrowserRouter, StaticRouter, Route} from 'react-router-dom';

import Normalize from 'componentsShare/Normalize';

import Header from './Header';
import Home from './Home';
import Footer from './Footer';

@radium
export default class Index extends React.Component {
  static propTypes = {
    isServer: PropTypes.bool
  }

  render() {
    const {isServer, ...props} = this.props;
    const Router = isServer ? StaticRouter : BrowserRouter;

    return (
      <Router {...props}>
        <div>
          <Normalize />

          <Header />

          <Route path='/'
                 component={() => <Home />}
                 exact
          />

          <Route path='/topics/'
                 component={() => <div>topics</div>}
                 exact
          />

          <Footer />
        </div>
      </Router>
    );
  }
}
