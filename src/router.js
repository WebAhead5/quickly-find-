var handlers = require('./handlers.js')
var giphyHandler = require('./giphyhandler')

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
    if (request.url === '/giphyhandler.js') {
        // console.log("requested index.js")
        giphyHandler(request, response)
    }
    if (request.url === '/giphy.js') {
        // console.log("requested index.js")
        handlers.giphyFEHandler(request, response)
    }
    if (request.url === '/favicon.ico') {
        // console.log("requested favicon.js")
        handlers.favHandler(request, response)
    }
    if (request.url === '/dictresponse') {
        // console.log("requested states.json")
        handlers.dataHandler(request,response)
    }
    if (request.url === '/logic.js') {
        // console.log("requested states.json")
        handlers.logicHandler(request,response)
        //console.log(response)
    }
    if (request.url === '/dictfile') {
        console.log("requested dictionary.txt")
        handlers.txtHandler(request, response)
    }


}


module.exports=router;