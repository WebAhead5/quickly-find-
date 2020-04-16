var url = require('url');
var querystring = require('querystring')
var requester = require('request');
var giphyAPI = "api_key=WwO6TOqO5F501pUYn8AP1RWD7I1Cr0uM";
var giphyURL = "http://api.giphy.com/v1/gifs/random?"
var path = require('path')



const giphyModule = (request, response) => {
  var address = url.parse(request.url).query;
  var queryaddress = querystring.parse(address);
  var wordId = queryaddress.match;

  var tags = `&tag=${wordId}&rating=R`

  var pathtoGiphy = giphyURL.concat(giphyAPI, tags)

  requester.get(pathtoGiphy, (err, res, body) => {

    if (err) {
      if (err) { console.log("giphy error?: ", err) }

      response.writeHead(400, { "Content-Type": "text/plain" })
      response.end("error for random bear")
      return
    }
    response.writeHead(200, { "Content-Type": "application/json" })
    let parsedstring = JSON.parse(res.body)
    console.log("giphy response.body:",parsedstring.data.length)

    if(parsedstring.data.length ===0 ){
      response.end("there is no giphy available")
    }

    response.end(res.body);

  }
  )
}
module.exports = {
  giphyModule: giphyModule
}