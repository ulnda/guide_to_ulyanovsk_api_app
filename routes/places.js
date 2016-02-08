const baseRoute = '/places';

module.exports = [
  {
    method: 'GET',
    path: baseRoute,
    handler: function(request, reply) {
      request.models.Place.findAll().then((places) => {
        reply(places);
      });
    }
  },
  {
    method: 'GET',
    path: `${baseRoute}/{id}`,
    handler: function(request, reply) {
      request.models.Place.findById(request.params.id).then((place) => {
        reply(place);
      });
    }
  },
  {
    method: 'POST',
    path: baseRoute,
    handler: function(request, reply) {
      request.models.Place.create(request.payload).then((place) => {
        reply({result: 'ok'});
      });
    }
  },
  {
    method: 'DELETE',
    path: `${baseRoute}/{id}`,
    handler: function(request, reply) {
      request.models.Place.findById(request.params.id).then((place) => {
        return place.destroy();
      }).then(() => {
        reply({result: 'ok'});
      });
    }
  },
  {
    method: 'PUT',
    path: `${baseRoute}/{id}`,
    handler: function(request, reply) {
      request.models.Place.findById(request.params.id).then((place) => {
        return place.update(request.payload);
      }).then(() => {
        reply({result: 'ok'});
      });
    }
  },
];