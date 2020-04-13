const http = require("https");

const txtBox = document.querySelector(".txtBox");
const form = document.querySelector(".searchForm");
const searchWord = document.querySelector(".search-word");
const description = document.querySelector(".description");




const app_id = "<2aa061c4>"
const app_key = "<1bbed253bde49ddc5b0a5ce1d570c77f >"
const wordId = "ace";
const fields = "pronunciations";
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



http.get(options, (resp) => {
    let body = '';
    resp.on('data', (d) => {
        body += d;
    });
    resp.on('end', () => {
        let parsed = JSON.stringify(body);

        console.log(parsed);
    });
});








const dictionaryJson =options['method'];
 
function searchDict(e) {
  e.preventDefault();
  fetch(dictionaryJson)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      e.preventDefault;
      let word = txtBox.value;
      console.log(txtBox.value);
      let searchKeyword = word.toUpperCase();
      Object.keys(data).forEach(function(key) {
        if (key === searchKeyword) {
          searchWord.innerHTML = searchKeyword;
          if(searchKeyword === data[key]){
            description.innerHTML = "Not found";
          }
          else{
             description.innerHTML = data[key];
          }
          
          console.log(data[key]);
        }
      });
    });
}

form.addEventListener("submit", searchDict);
























// import requests
// import json
// app_id = "<2aa061c4>"
// app_key = "<1bbed253bde49ddc5b0a5ce1d570c77f >"
// language = "en-gb"
// word_id = "example"
// url = "https://od-api.oxforddictionaries.com:443/api/v2/entries/" + language + "/" + word_id.lower()
// r = requests.get(url, headers={"app_id": <app_id>, "app_key": <app_key>})