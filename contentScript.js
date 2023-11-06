// Get access to the current web page's document object
var doc = document;

// Change the favicon by creating a new HTML link element
var link = doc.createElement('link');
link.type = 'image/x-icon';
link.rel = 'shortcut icon';
link.href = 'https://google.com/favicon.ico'; // Replace 'URL_TO_YOUR_NEW_FAVICON' with the URL of your new favicon image
doc.head.appendChild(link);

// Change the page title
doc.title = "Google"; // Replace 'YOUR_NEW_TITLE' with the desired title for the web page
