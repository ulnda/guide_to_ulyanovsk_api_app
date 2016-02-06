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
      return reply({result: 'created'});
    }
  },
  {
    method: 'DELETE',
    path: `${baseRoute}/{id}`,
    handler: function(request, reply) {
      return reply({result: 'deleted ' + request.params.id});
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