'use strict';

import React from 'react';
import {StyleRoot} from 'radium';
import Link from 'cat-components/lib/Link';
import Button from 'cat-components/lib/Button';

import Img, {ImgContent} from 'componentsHome/Img';
import Introduce from 'componentsHome/Introduce';
import Topic from 'componentsHome/Topic';
import Speaker from 'componentsHome/Speaker';
import Map from 'componentsHome/Map';
import Organizer from 'componentsHome/Organizer';
import style from 'componentsStyle/home';
import {layout, content} from 'componentsShareStyle/style';
import imgStyle from 'componentsHome/style/img';
import topics from 'componentsHome/topics';
import speakers from 'componentsHome/speakers';
import organizers from 'componentsHome/organizers';

export default class Home extends React.Component {
  render() {
    return (
      <StyleRoot>
        <Introduce />

        <Img src=''>
          <ImgContent id='introduce-1'>
            <h1 style={imgStyle.title}>AI Forum 2017</h1>
            <p style={imgStyle.body}>
              主題將包括人工智慧在掀起第三次工業革命的物聯網上所扮演的角色、和目前最熱門的機器學習與資料探勘議題、以及以及幫助Google AlphaGo擊敗棋王的蒙地卡羅樹搜尋與深度學習的應用。將有來自國內外十餘位人工智慧專家學者進行專題演講，同時也邀請到專家學者與Intel、趨勢科技等知名廠商參與AlphaGo與物聯網兩場論壇，機會難得，精彩可期！
            </p>
          </ImgContent>
        </Img>

        <div style={content.root}>
          <h1 style={content.title}>主題</h1>

          <div style={layout.grid}>
            {topics.map((topic, topicIndex) => {
              return (
                <Topic key={topicIndex}
                       {...topic}
                />
              );
            })}
          </div>
        </div>

        <Img src=''>
          <ImgContent style={style.topic}>
            <h1 style={[imgStyle.title, style.topic_color]}
            >會議主題</h1>

            <p style={[imgStyle.body, style.topic_color]}>
              本活動以論壇的方式，提供國內大學、研究單位及產業界的專家與學者一個對話與吸收新知的平台。 本屆人工智慧論壇邀請到國際知名傑出學者包括法國國家資訊研究院研究員Tristan CazeNave，與新加坡南洋科技大學教授Gao Cong。會議中並舉辦兩個主題討論會，主題包括智慧物聯網與機器學習，希望AI Forum 2016能有助拓展參與研究者更廣更深的視野，也增進台灣人工智慧領域研究能量與國際能見度。並且讓東部的學生有更多機會接觸最新的人工智慧研討會活動。
            </p>

            <Link to='/schedue/'>
              <Button style={style.topic_button}
              >了解更多</Button>
            </Link>
          </ImgContent>
        </Img>

        <div style={content.root}>
          <h1 style={content.title}>講者</h1>

          <div style={layout.grid}>
            {speakers.map((speaker, speakerIndex) => {
              return (
                <Speaker key={speakerIndex}
                         {...speaker}
                />
              );
            })}
          </div>
        </div>

        <Img background={<Map />}>
          <ImgContent style={style.map}>
            <h1 style={imgStyle.title}>相關資訊</h1>

            <p style={imgStyle.body}>
              地點：國立成功大學 國際會議廳
              <br />
              地址：台南市東區大學路1號
              <br />
              電話：(06) 275-7575
              <br />
              聯絡人：莊坤達
            </p>
          </ImgContent>
        </Img>

        <div style={content.root}>
          <h1 style={content.title}>主協辦單位</h1>

          <div style={style.organizer}>
            {organizers.map((organizer, organizerIndex) => {
              return (
                <Organizer key={organizerIndex}
                           {...organizer}
                />
              );
            })}
          </div>
        </div>
      </StyleRoot>
    );
  }
}
