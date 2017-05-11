'use strict';

import React from 'react';
import radium from 'radium';
import Button from 'cat-components/lib/Button';
import GoTo from 'cat-components/lib/GoTo';

import Icon from 'componentsShareIcon/Icon';
import {layout} from 'componentsShareStyle/style';

import style from './style/introduce';

@radium
export default class Introduce extends React.Component {
  render() {
    return (
      <div style={style.root}>
        <div style={[style.container, layout.grid]}>
          <div style={layout.col(7)}>
            <Icon style={style.icon} />

            <h3 style={style.title}>簡單敘述(約20字)</h3>

            <h5 style={style.date}>2018 年 4 月 29 - 30 日</h5>
            <p style={style.location}>國立成功大學</p>
          </div>

          <div style={layout.col(5)}>
            <div style={style.block}>
              <h1 style={style.block_title}>AI Forum 2017</h1>

              <p style={style.block_content}>
                現代的科技日新月異，層出不窮的科技發展，讓人類的生活更加便利與快速，其中人工智慧扮演著不可或缺的角色，因為人工智慧的不斷進步，創造出智慧型手機、智能型家電、專家系統、搜尋引擎、推薦系統等。巧妙運用人工智慧在其中，完成了各種幫助人類快速而便利的完成目標的強力工具。
              </p>

              <GoTo main='body'
                    target='#introduce-1'
                    sec={1}
              >
                <Button style={style.button}
                >了解更多</Button>
              </GoTo>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
