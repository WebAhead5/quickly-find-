var searchInput = document.getElementById('searchinput');
var fullArray = []
var xhr = new XMLHttpRequest();
var url = '/dictfile';
xhr.open('GET', url);
xhr.send();

xhr.onreadystatechange = function onReadyStateChange() {
  console.log("xhr fired")
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
  console.log("setDataList firing")
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
  })
}


searchInput.addEventListener('input', () => {
  clearSearchList();
  setDataList(searchInput.value)
})

document.getElementById('suggestions').getElementsByTagName("option").addEventListener('click', () => {


  console.log('clicked')



})





