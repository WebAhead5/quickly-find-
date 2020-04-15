function giphyReturn() {
  var searchInput = document.getElementById('searchinput')
  var url = `api/giphyhandler?match=${searchInput.value}`;

  fetch(url)
    .then(function (response) {
      return response.json();
      
  
    })
    .then(function (data) {
      var datafinal=data.data.images.downsized.url;

      document.getElementById('giphygif').src = datafinal;
      
    })
    .catch(function (error) {
      console.log(error);
    })

}