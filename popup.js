document.addEventListener('DOMContentLoaded', function() {
  var searchButton = document.getElementById('searchButton');

  searchButton.addEventListener('click', function() {
    var searchText = document.getElementById('searchText').value;
    var proxyUrl = 'https://google.com'; // Replace with your proxy URL

    
    var finalUrl = proxyUrl + '/search?q=' + encodeURIComponent(searchText);

    // Open the final URL in a new tab
    chrome.tabs.create({ url: finalUrl });
  });
});
