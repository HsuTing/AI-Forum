'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import radium from 'radium';

import style from './style/map';

const center = [120.2180947, 22.9996873];

@radium
export default class Map extends React.Component {
  static propTypes = {
    interactive: PropTypes.bool
  }

  static defaultProps = {
    interactive: false
  }

  componentDidMount() {
    /* eslint-disable no-undef */
    const {interactive} = this.props;

    mapboxgl.accessToken = 'pk.eyJ1IjoiaHN1dGluZyIsImEiOiJRajF4Y0hjIn0.9UDt8uw_fxEX791Styd-lA';

    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v9',
      center,
      zoom: 15,
      interactive
    });

    map.on('load', () => {
      this.addIcon(map);
    });
    /* eslint-enable no-undef */
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div id='map'
           style={style}
      />
    );
  }

  addIcon(map) {
    const img = '/AI-Forum/docs/public/icons/location.png';

    map.loadImage(img, (error, image) => {
      if(error)
        throw error;

      map.addImage('cat', image);
      map.addLayer({
        id: 'points',
        type: 'symbol',
        source: {
          type: 'geojson',
          data: {
            type: 'FeatureCollection',
            features: [{
              type: 'Feature',
              geometry: {
                type: 'Point',
                coordinates: center
              }
            }]
          }
        },
        layout: {
          'icon-image': 'cat',
          'icon-size': 0.8
        }
      });
    });
  }
}
