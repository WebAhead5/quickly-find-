var xhrgiphy = new XMLHttpRequest();
var url = '/giphyhandler.js';
xhrgiphy.open('GET', url);
xhrgiphy.send();

xhrgiphy.onreadystatechange = function onReadyStateChange() {
  console.log("xhrgiphy fired")
  if (xhrgiphy.readyState === 4 && xhrgiphy.status === 200) {
    //need to handle xhrgiphy.response...? not response text?
    console.log(xhrgiphy)

  }
};