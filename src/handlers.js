var fs = require('fs')
var axios = require('axios')
var querystring = require('querystring')
var url = require('url');
var requester = require('request');

const indexHandler = function (request, response) {
    response.writeHead(200, { "Content-Type": "text/html" })
    fs.readFile(__dirname + '/../public/index.html', function (error, file) {
        if (error) {
            console.log(error);
            return;
        }
        response.end(file)
    })
}

const styleHandler = function (request, response) {
    response.writeHead(200, { "Content-Type": "text/css" })
    fs.readFile(__dirname + '/../public/style.css', function (err, file) {
        if (err) {
            console.log(err)
            return
        }
        response.end(file)
    })
}

const jsHandler = function (request, response) {
    response.writeHead(200, { "Content-Type": "text/javascript" })
    fs.readFile(__dirname + '/../public/index.js', function (err, file) {
        if (err) {
            console.log(err)
            return
        }
        response.end(file)
    })
}

const favHandler = function (request, response) {
    response.writeHead(200, { "Content-Type": "image/ico" })
    fs.readFile(__dirname + '/../public/favicon.ico', function (err, file) {
        if (err) {
            console.log(err)
            return
        }
        response.end(file)
    })
}
const logicHandler = function (request, response) {
    response.writeHead(200, { "Content-Type": "text/javascript" })
    fs.readFile(__dirname + '/../public/logic.js', function (err, file) {
        if (err) {
            console.log(err)
            return
        }
        // console.log("file firing", file)
        response.end(file)
    })
}
// const giphyFEHandler = function (request, response) {
//     response.writeHead(200, { "Content-Type": "text/javascript" })
//     fs.readFile(__dirname + '/../public/giphy.js', function (err, file) {
//         if (err) {
//             console.log(err)
//             return
//         }
//         console.log("giphy file firing", file)
//         response.end(file)
//     })
// }



const dataHandler = (request, response) => {
    const app_id = "2aa061c4"
    const app_key = "1bbed253bde49ddc5b0a5ce1d570c77f"
    const address = url.parse(request.url).query;
    const queryaddress = querystring.parse(address);
    const wordId = queryaddress.match;
    console.log('Your searching word is', wordId);
    const fields = "definitions";
    const strictMatch = "false";


    const options = {
        host: 'od-api.oxforddictionaries.com',
        port: '443',
        path: '/api/v2/entries/en-gb/' + wordId + '?fields=' + fields + '&strictMatch=' + strictMatch,
        method: "GET",
        headers: {
            'app_id': app_id,
            'app_key': app_key
        }
    };

    var link = 'https://od-api.oxforddictionaries.com/api/v2/entries/en-gb/' + wordId + '?' + fields + '&strictMatch=' + strictMatch;
    axios.get(link, options)

        .then(function (res) {
            // console.log(JSON.stringify(res.data.results))
            var definition = res.data.results[0].lexicalEntries[0].entries[0].senses[0].definitions[0];
            console.log(definition);
            response.end(JSON.stringify(definition));
        })
        .catch(function (err) {
            console.log(err);
        })


};
const txtHandler = function (request, response) {
    response.writeHead(200, { "Content-Type": "text/plain" })
    fs.readFile(__dirname + '/../dictionary.txt', function (err, file) {
        if (err) {
            console.log(err)
            return
        }
        response.end(file)
    })
}


var giphyAPI = "api_key=WwO6TOqO5F501pUYn8AP1RWD7I1Cr0uM";
var giphyURL = "http://api.giphy.com/v1/gifs/random?"
var tags = "&tag=monkey&rating=R"

var pathtoGiphy = giphyURL.concat(giphyAPI, tags)


const giphyFEHandler = (request, response) => {

    requester.get(pathtoGiphy, (err, res, body) => {
        //console.log(res)
        //console.log(body)
        console.log('giphyModule is firing')
        if (err) {
            if (err) { console.log("giphy error?: ", err) }
            response.writeHead(400, { "Content-Type": "text/plain" })
            response.end("error for random bear")
            return
        }
        const { data } = JSON.parse(body)
        const imgHtml = data.image_original_url
        response.writeHead(200, { 'content-type': 'text/html' })
        console.log(imgHtml);
        response.end(imgHtml);

    }
    )
}

module.exports = {
    indexHandler: indexHandler,
    styleHandler: styleHandler,
    jsHandler: jsHandler,
    favHandler: favHandler,
    dataHandler: dataHandler,
    logicHandler: logicHandler,
    txtHandler: txtHandler,
    giphyHandler: giphyHandler,

}