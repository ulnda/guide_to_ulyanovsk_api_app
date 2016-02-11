module.exports = {
  decodeBase64Image: function(dataString) {
    var matches = dataString.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
    var response = {};

    if (matches.length !== 3) {
      return new Error('Invalid input string');
    }

    response.type = matches[1].substr(6, matches[1].length - 1);
    response.data = new Buffer(matches[2], 'base64');

    return response;
  }
}