'use strict';

const Hapi = require('hapi');

const PlacesRoutes = require('./routes/places');
const HotelsRoutes = require('./routes/hotels');

const server = new Hapi.Server();
server.connection(require('./configs/server_connection'));

server.route(PlacesRoutes);
server.route(HotelsRoutes);

server.register(
  [
    require('./configs/sequelize_plugin')
  ], 
  (err) => {
    if (err) {
      throw err;
    }

    require('./initializers/server')(server);
  }
);

