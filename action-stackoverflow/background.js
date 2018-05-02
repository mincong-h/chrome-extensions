// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  var urls = [
    'https://stackoverflow.com/questions/tagged/java%20selenium',
    'https://stackoverflow.com/questions/tagged/java%20xml',
    'https://stackoverflow.com/questions/tagged/java%20macos',
    'https://stackoverflow.com/questions/tagged/java%20jersey',
    'https://stackoverflow.com/questions/tagged/java%20telegram',
    'https://stackoverflow.com/questions/tagged/java-8',
    'https://stackoverflow.com/questions/tagged/jgit',
    'https://stackoverflow.com/questions/tagged/bash',
    'https://stackoverflow.com/questions/tagged/maven',
    'https://stackoverflow.com/questions/tagged/git'
  ];
  urls.forEach(function(url) {
    window.open(url);
  });
  chrome.tabs.update(tab.id, {selected: true});
});
