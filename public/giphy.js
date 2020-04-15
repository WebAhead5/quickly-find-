var xhr = new XMLHttpRequest();
var url = '/giphyhandler.js';
xhr.open('GET', url);
xhr.send();

xhr.onreadystatechange = function onReadyStateChange() {
  console.log("xhr fired")
  if (xhr.readyState === 4 && xhr.status === 200) {
    //need to handle xhr.response...? not response text?
    console.log(xhr)

  }
};