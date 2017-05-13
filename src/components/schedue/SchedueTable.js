'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import radium from 'radium';
import {Table, Thead, Tbody, Tr, Th, Td} from 'cat-components/lib/Table';

import style from './style/schedueTable';

@radium
export default class SchedueTable extends React.Component {
  static propTypes = {
    data: PropTypes.arrayOf(
      PropTypes.shape({
        time: PropTypes.string.isRequired,
        activity: PropTypes.string.isRequired,
        leader: PropTypes.string.isRequired
      })
    ).isRequired
  }

  render() {
    const {data} = this.props;

    return (
      <Table style={style.table}>
        <Thead>
          <Tr>
            <Th>時間</Th>
            <Th>活動</Th>
            <Th>引言人</Th>
          </Tr>
        </Thead>

        <Tbody>
          {data.map((d, dIndex) => {
            const {time, activity, leader} = d;

            return (
              <Tr key={dIndex}>
                <Td style={style.time}>{time}</Td>
                <Td>{activity}</Td>
                <Td style={style.leader}>{leader}</Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    );
  }
}
