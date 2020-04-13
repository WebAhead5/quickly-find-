var fs = require('fs')

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

// const dataHandler = function (request, response) {
//     response.writeHead(200, { "Content-Type": "text/json" })
//     fs.readFile(__dirname + '/../data/states.json', function (err, file) {
//         if (err) {
//             console.log(err)
//             return
//         }
//         response.end(file)
//     })
// }

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
    styleHandler:styleHandler,
    jsHandler: jsHandler,
    favHandler: favHandler,
    // dataHandler: dataHandler,
    // txtHandler: txtHandler,

}