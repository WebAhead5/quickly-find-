var searchInput = document.getElementById('searchinput');
var giphygif = document.getElementById('giphygif')
var monkeystatus = document.getElementById('monkeystatus')

function giphyReturn() {
  var searchInput = document.getElementById('searchinput')
  var url = `api/giphyhandler?match=${searchInput.value}`;

  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      monkeystatus.textContent = 'gif Found!'
      var datafinal = data.data.images.downsized.url;
      document.getElementById('giphygif').src = datafinal;

    })
    .catch(function (error) {
      setTimeout(()=>{
        monkeystatus.textContent = 'Monkey could not find any gifs for this word.'
        giphygif.src = "/public/img/unhappymonkey.gif"
        console.log(error);
      },3500)

    })
}


searchInput.addEventListener('input', () => {
  if (searchInput.value == '') {
    giphygif.src = '/public/img/boredmonkey.gif'
  }
  else {
    monkeystatus.textContent = 'Monkey Typing!'
    giphygif.src = '/public/img/typingmonkey.gif';
  }
})

function waitingmonkey(){
  monkeystatus.textContent = 'Monkey Looking for a gif!'
  giphygif.src = '/public/img/dancingmonkey.gif'
}