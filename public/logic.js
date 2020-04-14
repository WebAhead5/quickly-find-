

var searchInput = document.getElementById('searchinput');

var xhr = new XMLHttpRequest();
var url = '/dictfile';
xhr.open('GET', url);
xhr.send();

console.log(xhr.readyState)

xhr.onreadystatechange = function onReadyStateChange() {
  console.log("xhr fired")
  if (xhr.readyState === 4 && xhr.status === 200) {
    const response = xhr.responseText.split('\n');
    //callback(response);
    console.log(response[4])
  }
};

