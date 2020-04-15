var fs = require('fs')
var axios = require('axios')
var querystring = require('querystring')
var url = require('url');
const path = require('path');

var extensionTypesObj = {
    html: 'text/html',
    css: 'text/css',
    js: 'application/javascript',
    ico: 'image/x-icon',
    txt: 'text/plain'
}

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

const publicHandler = (request, response) => {
    const url = request.url; // /public/dictionary.txt
    const extension = url.split('.')[1]; // txt

    console.log(__dirname, "..", url)
    const filePath = path.join(__dirname, "..", url);
    fs.readFile(filePath, (error, file) => {
        if (error) {
            response.writeHead(500, { 'Content-Type': 'text/html' });
            response.end("<h1>Sorry, encountered a problem</h1>");
        } else {
            response.writeHead(200, { 'Content-type': extensionTypesObj[extension] });
            response.end(file);
        }
    })
}

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


module.exports = {
    indexHandler: indexHandler,
    dataHandler: dataHandler,
    publicHandler: publicHandler,
}
