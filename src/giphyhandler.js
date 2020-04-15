var requester = require('request');
var giphyAPI = "api_key=WwO6TOqO5F501pUYn8AP1RWD7I1Cr0uM";
var giphyURL = "http://api.giphy.com/v1/gifs/random?"
var tags = "&tag=monkey&rating=R"


var path = require('path')
var pathtoGiphy = giphyURL.concat(giphyAPI, tags)
//console.log(pathtoGiphy)
// api.giphy.com/v1/gifs/random?api_key=WwO6TOqO5F501pUYn8AP1RWD7I1Cr0uM&tag=bear&rating=R

const giphyModule = (request, response) => {

  requester.get(pathtoGiphy, (err, res, body) => {
    //console.log(res)
    //console.log(body)
    console.log('giphyModule is firing')
    if(err){console.log("giphy error?: ", err)}
    if (err) {
      response.writeHead(400, { "Content-Type": "text/plain" })
      response.end("error for random bear")
      return
    }
    const { data } = JSON.parse(body)
    const imgHtml = `<img src=${data.image_original_url} />`
    response.writeHead(200, { 'content-type': 'text/html' })
    response.end(imgHtml)
  }
  )
}
module.exports = (giphyModule)