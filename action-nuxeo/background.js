// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  var urls = [
    'https://nuxeo.slack.com',
    'https://github.com/notifications',
    'https://mail.google.com/mail/u/0/'
  ];
  urls.forEach(function(url) {
    window.open(url);
  });
});
