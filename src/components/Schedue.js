'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import radium from 'radium';
import {Route} from 'react-router-dom';

import MenuLink from 'componentsSchedue/MenuLink';
import SchedueTable from 'componentsSchedue/SchedueTable';
import firstDay from 'componentsSchedue/firstDay';
import secondDay from 'componentsSchedue/secondDay';
import style from 'componentsStyle/schedue';

const name = 'schedue/';

@radium
export default class Schedue extends React.Component {
  static propTypes = {
    Router: PropTypes.func.isRequired,
    basename: PropTypes.string.isRequired,
    isServer: PropTypes.bool
  }

  constructor(props) {
    super(props);

    this.getComponent = this.getComponent.bind(this);
  }

  render() {
    const {Router, basename, ...props} = this.props;

    return (
      <Router {...props}
              basename={`${basename}${name}`}
      >
        <div style={style.root}>
          <div style={style.titleRoot}>
            <h1 style={style.title}
            >會議議程</h1>
          </div>

          <div style={style.menu}>
            <MenuLink to='/'>
              4 / 29
            </MenuLink>
            <MenuLink to='/second/'>
              4 / 30
            </MenuLink>
          </div>

          <div>
            <Route path='*'
                   component={this.getComponent}
            />
          </div>
        </div>
      </Router>
    );
  }

  getComponent({match}) {
    const {isServer} = this.props;
    const link = isServer ? match.url.replace(name, '') : match.url;
    let data = [];

    switch(link) {
      case '/':
        data = firstDay;
        break;

      case '/second/':
        data = secondDay;
        break;
    }

    return (
      <SchedueTable data={data} />
    );
  }
}
