var handlers = require('./handlers.js')

function router(request, response) {
    console.log(request.url, request.method)
    if (request.url === '/') {
        handlers.indexHandler(request, response)
    }
    if (request.url === '/style.css') {
        // console.log("requested style")
        handlers.styleHandler(request, response)
    }
    if (request.url === '/index.js') {
        // console.log("requested index.js")
        handlers.jsHandler(request, response)
    }
    if (request.url === '/favicon.ico') {
        // console.log("requested favicon.js")
        handlers.favHandler(request, response)
    }
    if (request.url === '/favicon.ico') {
        // console.log("requested favicon.js")
        handlers.favHandler(request, response)
    }
    // if (request.url === '/data/states.json') {
    //     console.log("requested states.json")
    //     handlers.dataHandler(request, response)
    // }
    // if (request.url === '/data/example.txt') {
    //     console.log("requested example.txt")
    //     handlers.txtHandler(request, response)
    // }

}


module.exports=router;