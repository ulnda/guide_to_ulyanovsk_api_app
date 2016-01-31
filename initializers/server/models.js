'use strict';

function addModelsToRequest(server) {
  server.ext('onPreHandler', function (modelCollections) {
    return (request, reply) => {
      request.models = modelCollections;
      reply.continue();
    }
  }(server.plugins['hapi-sequelize'].db.sequelize.models));
}

function syncModels(server) {
  let db = server.plugins['hapi-sequelize'].db;
  db.sequelize.sync().then(function() {
    console.log('Models synced');
  });
}

module.exports = (server) => {
  addModelsToRequest(server);
  syncModels(server);
}