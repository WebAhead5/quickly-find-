var axios = require('axios')
var querystring = require('querystring')
var url = require('url');

const oxfordHandler = (request, response) => {
    const app_id = "2aa061c4"
    const app_key = "1bbed253bde49ddc5b0a5ce1d570c77f"
    const address = url.parse(request.url).query;
    const queryaddress = querystring.parse(address);
    const wordId = queryaddress.match;
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
            response.writeHead(200, { "Content-Type": "application/json" })
            response.end(JSON.stringify(definition));
        })
        .catch(function (err) {
            console.log(err);
        })


};


module.exports = {
    oxfordHandler: oxfordHandler,
}
