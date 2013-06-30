var http = Npm.require('http');
var http = Npm.require('http');
var Fiber = Npm.require('fibers');

Meteor.startup(function () {
  //var url = 'http://www.immobilien.net/Eigentumswohnungen/Wien/Seite1/treffer.aspx?iskauf=1&kaufpreisbis=100000';
  var url = 'http://www.immobilien.net/1050_Wien-Margareten/1252-1015/detail.aspx';
  getImmo(url);
});

var getImmo = function (url) {  
  var price_selector = '#majorContent_closeEck_previewDiv .detailGrid dd:eq(1)'
  var price_extractor = function(price) {
    price = price.replace('€', '');
    price = price.replace('.', '');
    price = price.replace(',', '.');
    price = parseInt(price, 10);
    return price;
  }
  var image_selector = '.mainPicture img';

  var data = $.get(url, {}, function(data) {
    console.log('success');
    // Price
    var price = $(data).find(price_selector).text();
    price = price_extractor(price);
    console.log(price);
    // Image
    var image = $(data).find(image_selector).attr('src');
    console.log(image);
    Fiber(function() {
      Data.insert({
        url: url,
        price: price,
        image: image,
      });
    }).run();
  });
}

