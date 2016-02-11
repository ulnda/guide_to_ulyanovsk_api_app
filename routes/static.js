module.exports = [
  {
    method: 'GET',
    path: `/{filename*}`,
    handler: {
      file: function (request) {
        return `public/${request.params.filename}`;
      }
    }
  },
  {
    method: 'GET',
    path: '/',
    handler: {
      file: function (request) {
        return 'public/index.html';
      }
    }
  }
];