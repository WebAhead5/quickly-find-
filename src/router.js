var handlers = require('./handlers.js')
var giphyHandler = require('./giphyhandler')

function router(request, response) {
    if (request.url === '/') {
        handlers.indexHandler(request, response)
    }
    if (request.url === '/style.css') {
        handlers.styleHandler(request, response)
    }
    if (request.url === '/index.js') {

        handlers.jsHandler(request, response)
    }
    if (request.url === '/giphyhandler.js') {
        giphyHandler(request, response)
    }
    if (request.url === '/giphy.js') {

        handlers.giphyFEHandler(request, response)
    }
    if (request.url.includes ('/api/words') ) {
        handlers.dataHandler(request,response)
        
    }
    if (request.url.includes ('/test') ) {
        handlers.dataHandler(request,response)
        
    }
    if (request.url === '/logic.js') {
        handlers.logicHandler(request,response)

    }
    if (request.url === '/dictfile') {
        handlers.txtHandler(request, response)
    }


}


module.exports=router;