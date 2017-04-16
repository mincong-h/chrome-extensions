function yesterday() {
  var months = [
    'janvier',
    'fevrier',
    'mars',
    'avril',
    'mai',
    'juin',
    'juillet',
    'aout',
    'septembre',
    'octobre',
    'novembre',
    'decembre'
  ];
  var d = new Date(Date.now() - 86400000); // yesterday
  return d.getDate() + '-' + months[d.getMonth()] + '-' + d.getFullYear();
}
chrome.browserAction.onClicked.addListener(function(tab) {
  // URL example: 'https://www.tf1.fr/tf1/jt-20h/videos/20-heures-12-avril-2017.html'
  var url = 'https://www.tf1.fr/tf1/jt-20h/videos/20-heures-' + yesterday() + '.html';
  window.open(url);
  chrome.tabs.update(tab.id, {selected: true});
});
