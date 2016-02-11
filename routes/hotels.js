'use strict';

const baseRoute = '/hotels';
const imageLib = require('../libs/images');
const fs = require('fs');

module.exports = [
  {
    method: 'GET',
    path: baseRoute,
    handler: function(request, reply) {
      request.models.Hotel.findAll().then((hotels) => {
        reply(hotels);
      });
    }
  },
  {
    method: 'GET',
    path: `${baseRoute}/{id}`,
    handler: function(request, reply) {
      request.models.Hotel.find({ where: { id: request.params.id }, include: [request.models.Comment] }).then((hotel) => {
        reply(hotel);
      });
    }
  },
  {
    method: 'POST',
    path: baseRoute,
    handler: function(request, reply) {
      request.models.Hotel.create(request.payload).then((hotel) => {
        let imageBuffer = imageLib.decodeBase64Image(request.payload.croppedImage);
        let imagePath = `images/hotels/${hotel.id}.${imageBuffer.type}`;
        fs.writeFile(`public/${imagePath}`, imageBuffer.data, function(err) { 
          reply({result: 'ok'});
          hotel.image = imagePath;
          hotel.save();
        });
      });
    }
  },
  {
    method: 'DELETE',
    path: `${baseRoute}/{id}`,
    handler: function(request, reply) {
      request.models.Hotel.findById(request.params.id).then((hotel) => {
        fs.unlinkSync(`public/${hotel.image}`);
        return hotel.destroy();
      }).then(() => {
        reply({result: 'ok'});
      });
    }
  },
  {
    method: 'PUT',
    path: `${baseRoute}/{id}`,
    handler: function(request, reply) {
      request.models.Hotel.findById(request.params.id).then((hotel) => {
        return hotel.update(request.payload);
      }).then((hotel) => {
        if (request.payload.croppedImage) {
          let imageBuffer = imageLib.decodeBase64Image(request.payload.croppedImage);
          let imagePath = `images/hotels/${hotel.id}.${imageBuffer.type}`;
          fs.unlinkSync(`public/${hotel.image}`);
          fs.writeFile(`public/${imagePath}`, imageBuffer.data, function(err) { 
            reply({result: 'ok'});
            hotel.image = imagePath;
            hotel.save();
          });
        }
        else {
          reply({result: 'ok'});
        }
      });
    }
  },
];