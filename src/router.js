var handlers = require('./handlers.js')
var giphyHandler = require('./giphyhandler')

function router(request, response) {
    if (request.url === '/') {
        handlers.indexHandler(request, response)
    }
    else {
        handlers.publicHandler(request, response);
    } //GET public/style.css


    if (request.url.includes('/api/words')) {
        handlers.dataHandler(request, response)

    }
    // if (request.url === '/dictfile') {
    //     handlers.txtHandler(request, response)
    // }


}


module.exports = router;