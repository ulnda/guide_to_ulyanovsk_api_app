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

server.start((err) => {
  if (err) {
    throw err;
  }

  console.log('Server running at:', server.info.uri);
});