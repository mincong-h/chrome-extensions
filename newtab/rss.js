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

    console.log('------------------------');
    console.log('title      : ' + node.find('title').text());
    console.log('pubDate    : ' + node.find('pubDate').text());
    console.log('imageSrc   : ' + node.find('enclosure').attr('url'));
    console.log('------------------------');
  });
}
