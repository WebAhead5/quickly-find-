


function giphyReturn() {

  var searchInput = document.getElementById('searchinput')
  var xhrgiphy = new XMLHttpRequest();
  var url = `api/giphyhandler?match=${searchInput.value}`;
  xhrgiphy.open('GET', url);
  xhrgiphy.send();

  xhrgiphy.onreadystatechange = function onReadyStateChange() {
    console.log("xhrgiphy fired")
    if (xhrgiphy.readyState === 4 && xhrgiphy.status === 200) {
      //need to handle xhrgiphy.response...? not response text?
      document.getElementById('giphygif').src = xhrgiphy.responseText
    }
  }
}
