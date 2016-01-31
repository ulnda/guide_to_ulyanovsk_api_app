'use strict';

module.exports = (server) => {
  require('fs').readdirSync('./routes').forEach((file) => {
    server.route(require('../../routes/' + file));
  });
}