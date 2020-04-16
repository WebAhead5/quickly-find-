var searchInput = document.getElementById('searchinput');
var giphygif = document.getElementById('giphygif')


function giphyReturn() {
  var searchInput = document.getElementById('searchinput')
  var url = `api/giphyhandler?match=${searchInput.value}`;

  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var datafinal = data.data.images.downsized.url;
      document.getElementById('giphygif').src = datafinal;

    })
    .catch(function (error) {
      giphygif.src = "/public/img/unhappymonkey.gif"
      console.log(error);
    })
}


searchInput.addEventListener('input', () => {
  if (searchInput.value == '') {
    giphygif.src = '/public/img/boredmonkey.gif'
  }
  else {
    giphygif.src = '/public/img/typingmonkey.gif';
  }
})

function waitingmonkey(){
  giphygif.src = '/public/img/dancingmonkey.gif'
}