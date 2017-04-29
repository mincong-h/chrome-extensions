/**
 * Search the RSS feed when entering the rss keyword.
 */
$(function() {
  const NASA_IMG_URL = 'https://www.nasa.gov/rss/dyn/lg_image_of_the_day.rss';
  parseFeed(NASA_IMG_URL);
});

/**
 * Parse the feed URL of NASA - Image of the day.
 */
function parseFeed(url) {
  $.get(url, function(xml) {
    var node = $(xml).find('item:first');
    var title = node.find('title').text();
    var pubDate = node.find('pubDate').text();
    var imageUrl = node.find('enclosure').attr('url');

    console.log('------------------------');
    console.log('title      : ' + title);
    console.log('pubDate    : ' + pubDate);
    console.log('imageUrl   : ' + imageUrl);
    console.log('------------------------');

    // Render HTML
    $('#nasa-title').html(title);
    $('#nasa-copyright').html(pubDate + ' &copy; NASA');
    $('html').css('background-image', 'url(' + imageUrl + ')');
  });
}
