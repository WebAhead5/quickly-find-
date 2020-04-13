var fs = require('fs')
var axios = require('axios')


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




const dataHandler = () => {
    const app_id = "2aa061c4"
    const app_key = "1bbed253bde49ddc5b0a5ce1d570c77f"
    const wordId = "ace";
    const fields = "definition";
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

    var link = 'od-api.oxforddictionaries.com/api/v2/entries/en-gb/?' + fields + '&strictMatch=' + strictMatch;

    axios.get(link, options)
    
        .then(function (response) {
            console.log(response);
            return response;
        })
        .catch(function (error) {
            console.log(error);
            return error;
        })


};

// const txtHandler = function (request, response) {
//     response.writeHead(200, { "Content-Type": "text/plain" })
//     fs.readFile(__dirname + '/../data/example.txt', function (err, file) {
//         if (err) {
//             console.log(err)
//             return
//         }
//         response.end(file)
//     })
// }

module.exports = {
    indexHandler: indexHandler,
    styleHandler: styleHandler,
    jsHandler: jsHandler,
    favHandler: favHandler,
    dataHandler: dataHandler,
    // txtHandler: txtHandler,

}