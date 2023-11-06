document.addEventListener('DOMContentLoaded', function() {
  var searchButton = document.getElementById('searchButton');

  searchButton.addEventListener('click', function() {
    var searchText = document.getElementById('searchText').value;
    var proxyUrl = 'https://google.com';

    
    var finalUrl = proxyUrl + '/search?q=' + encodeURIComponent(searchText);
    
    chrome.tabs.create({ url: finalUrl });
  });
});
