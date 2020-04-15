var url = require('url');
var querystring = require('querystring')

var requester = require('request');
var giphyAPI = "api_key=WwO6TOqO5F501pUYn8AP1RWD7I1Cr0uM";
var giphyURL = "http://api.giphy.com/v1/gifs/random?"

var path = require('path')



//console.log(pathtoGiphy)
// api.giphy.com/v1/gifs/random?api_key=WwO6TOqO5F501pUYn8AP1RWD7I1Cr0uM&tag=bear&rating=R

const giphyModule = (request, response) => {
  var address = url.parse(request.url).query;
  var queryaddress = querystring.parse(address);
  var wordId = queryaddress.match;
  console.log('wordID: ',wordId)

  var tags = `&tag=${wordId}&rating=R`

  var pathtoGiphy = giphyURL.concat(giphyAPI, tags)

  requester.get(pathtoGiphy, (err, res, body) => {

    console.log(pathtoGiphy)
    if (err) {
      if (err) { console.log("giphy error?: ", err) }
      response.writeHead(400, { "Content-Type": "text/plain" })
      response.end("error for random bear")
      return
    }
    let parsedstring = JSON.parse(res.body)
    console.log(parsedstring.data.images.original.url)
    response.end(parsedstring.data.images.original.url)
  }
  )
}
module.exports = {
  giphyModule: giphyModule
}