'use strict';

const Hapi = require('hapi');

const PlacesRoutes = require('./routes/places');
const HotelsRoutes = require('./routes/hotels');

const server = new Hapi.Server();
server.connection({ 
  host: 'localhost', 
  port: 8000 
});

server.route(PlacesRoutes);
server.route(HotelsRoutes);

const sequalizePlugin = {
  register: require('hapi-sequelize'),
  options: {
    database: 'guide_to_ulyanovsk',
    user: 'guide_to_ulyanovsk',
    pass: 'guide123',
    dialect: 'postgres',
    port: 5432
  }
};

server.register(
  [
    sequalizePlugin
  ], 
  (err) => {
    if (err) {
      throw err;
    }

    server.start((err) => {
      if (err) {
        throw err;
      }

      console.log('Server running at:', server.info.uri);
    });
  }
);

