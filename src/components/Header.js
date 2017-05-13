'use strict';

import React from 'react';
import radium from 'radium';
import Link from 'cat-components/lib/Link';

import Icon from 'componentsShareIcon/Icon';
import style from 'componentsStyle/header';
import pages from 'componentsShare/pages';
import {boxShadow} from 'componentsShareStyle/style';

@radium
export default class Header extends React.Component {
  render() {
    return (
      <header style={[style.root, boxShadow]}>
        <div style={style.iconRoot}>
          <Icon style={style.icon} />
        </div>

        {[...pages].reverse().map((button, buttonIndex) => {
          const {title, link} = button;

          if(button.hide)
            return null;

          return (
            <Link key={buttonIndex}
                  to={link}
                  style={style.link}
            >{title}</Link>
          );
        })}
      </header>
    );
  }
}
