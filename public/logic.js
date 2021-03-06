var searchInput = document.getElementById('searchinput');
var form = document.getElementById('form');
document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();
  if (searchInput.value.length > 0) {
    waitingmonkey();
    submitform();
    giphyReturn();
  }
  if (searchInput.value.length === 0 ) {
    boredmonkey();

  }
  else return

});

var fullArray = []
var xhr = new XMLHttpRequest();
var url = 'public/dictionary.txt';
xhr.open('GET', url);
xhr.send();

xhr.onreadystatechange = function onReadyStateChange() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const response = xhr.responseText.split('\n');
    fullArray = response;

  }
};

function clearSearchList() {
  const list = document.getElementById('suggestions')

  Array.from(list.childNodes).forEach(node => {
    list.removeChild(node);
  });
}

function setDataList(intputtedtext) {
  const list = document.getElementById('suggestions')
  if (searchInput.value == '') {
    return
  }

  var regex = new RegExp(`^${intputtedtext}`, 'gi');
  let matchedWords = fullArray.filter(word => {
    return word.match(regex);
  }).slice(0, 10);


  matchedWords.forEach(word => {
    const optionNode = document.createElement('option')
    optionNode.text = word;
    list.appendChild(optionNode)
    optionNode.addEventListener('click', () => {

      searchInput.value = optionNode.text;


    })
  })
}

searchInput.addEventListener('input', () => {
  clearSearchList();
  setDataList(searchInput.value)
})



function submitform() {
  document.getElementById('suggestions').textContent = 'loading definition';

  var xhr = new XMLHttpRequest();
  xhr.open('GET', `/api/words?match=${searchInput.value}`);
  xhr.send();

  xhr.onreadystatechange = function onReadyStateChange() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var response_defintion = xhr.responseText;
      clearSearchList();
      document.getElementById('suggestions').textContent = response_defintion;
      

    }
  };

}
