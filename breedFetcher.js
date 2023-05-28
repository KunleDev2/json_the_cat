const request = require('request');
const getArgs = process.argv.slice(2);
const catsBaseUrl = 'https://api.thecatapi.com/v1/breeds/search?q=' + getArgs;

request(catsBaseUrl, (error, response, body) => {
  const data = JSON.parse(body);

  if (error) {
    console.log(error);
  } else {
    if (data.length === 0) {
      console.log("cat name is not available");
    } else {
      console.log(data[0].description);
    }
  }
});