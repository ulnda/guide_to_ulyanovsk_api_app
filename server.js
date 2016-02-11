'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection(require('./configs/server_connection'));

server.register(
  [
    require('./configs/sequelize_plugin'),
    require('inert')
  ], 
  (err) => {
    if (err) {
      throw err;
    }

    require('./initializers/server/models')(server);
    require('./initializers/server/routes')(server);
    require('./initializers/server/starting')(server);
  }
);

