var searchInput = document.getElementById('searchinput');
var wordsarray = [];
var xhr = new XMLHttpRequest();
var url = '/dictfile';
xhr.open('GET', url);
xhr.send();
xhr.onreadystatechange = function onReadyStateChange() {
  console.log("xhr fired")
  if (xhr.readyState === 4 && xhr.status === 200) {
    wordsarray = xhr.responseText.split('\n');
  }
};

function clearSearchList() {
  const list = document.getElementById('suggestions')

  Array.from(list.childNodes).forEach(node => {
    list.removeChild(node);
  });
}

function setDataList(optionValues) {
  const list = document.getElementById('suggestions')

  optionValues.forEach(word => {
    const optionNode = document.createElement('option')
    optionNode.value = word;
    list.appendChild(optionNode)
  })
}


searchInput.addEventListener('input', () => {
  clearSearchList();
  setDataList(wordsarray)
})





