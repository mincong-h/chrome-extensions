/**
 * Traverse the bookmark tree, and print the folder and nodes.
 */
function walkBookmarks() {
  chrome.bookmarks.getTree(function(bookmarkTreeNodes) {
    $('#bookmarks').append(walkTreeNodes(bookmarkTreeNodes));
  });
}

function walkTreeNodes(bookmarkNodes) {
  var list = $('');
  var i;
  for (i = 0; i < bookmarkNodes.length; i++) {
    list.append(walkNode(bookmarkNodes[i]));
  }
  return list;
}

function walkNode(bookmarkNode) {
  var li = $('<li>');
  if (bookmarkNode.title) {
    var anchor = $('<a>');
    anchor.attr('href', bookmarkNode.url);
    anchor.text(bookmarkNode.title);
    li.append(anchor);
  } else {
    console.log('Cannot load bookmark: ' + bookmarkNode.title);
  }
  return li;
}

document.addEventListener('DOMContentLoaded', function () {
  walkBookmarks();
});
