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
    method: 'POST',
    path: baseRoute,
    handler: function(request, reply) {
      request.models.Place.create(request.payload).then((place) => {
        reply(place);
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
      return reply({result: 'updated ' + request.params.id});
    }
  },
];