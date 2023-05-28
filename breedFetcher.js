const request = require('request');

const fetchBreedDescription = function(breedName, callback) {

  const catsBaseUrl = 'https://api.thecatapi.com/v1/breeds/search?q=' + breedName;
  const ifCatNotAvail = "cat name is not available";

  request(catsBaseUrl, (error, response, body) => {
    const data = JSON.parse(body);

    if (data.length === 0) {
      callback(ifCatNotAvail);
    } else {
      callback(error, data[0].description);
    }
  });
};

module.exports = { fetchBreedDescription };