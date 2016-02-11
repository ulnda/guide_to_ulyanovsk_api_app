'use strict';

const baseRoute = '/places';
const imageLib = require('../libs/images');
const fs = require('fs');

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
        let imageBuffer = imageLib.decodeBase64Image(request.payload.croppedImage);
        let imagePath = `images/places/${place.id}.${imageBuffer.type}`;
        if (!fs.existsSync('public/images/places')){
            fs.mkdirSync('public/images/places');
        }
        fs.writeFile(`public/${imagePath}`, imageBuffer.data, function(err) { 
          reply({result: 'ok'});
          place.image = imagePath;
          place.save();
        });
      });
    }
  },
  {
    method: 'DELETE',
    path: `${baseRoute}/{id}`,
    handler: function(request, reply) {
      request.models.Place.findById(request.params.id).then((place) => {
        fs.unlinkSync(`public/${place.image}`);
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
        if (request.payload.croppedImage) {
          let imageBuffer = imageLib.decodeBase64Image(request.payload.croppedImage);
          let imagePath = `images/places/${place.id}.${imageBuffer.type}`;
          fs.unlinkSync(`public/${place.image}`);
          fs.writeFile(`public/${imagePath}`, imageBuffer.data, function(err) { 
            reply({result: 'ok'});
            place.image = imagePath;
            place.save();
          });
        }
        else {
          reply({result: 'ok'});
        }
      });
    }
  },
];