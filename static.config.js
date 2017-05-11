'use strict';

const process = require('process');

const pages = require('./lib/components/share/pages').default;

const ENV = process.env.NODE_ENV === 'production';
const basename = ENV ? '/AI-Forum/' : '/AI-Forum/docs/';

module.exports = pages.concat({}).map(page => {
  const link = page.link ? page.link : '/'

  return {
    component: './lib/components/Index',
    js: 'index',
    name: `docs${link.slice(0, -1)}`,
    basename,
    props: {
      basename,
      isServer: true,
      location: link,
      context: {}
    }
  };
});
