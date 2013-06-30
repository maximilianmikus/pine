var http = Npm.require('http');
var http = Npm.require('http');
var Fiber = Npm.require('fibers');

Meteor.startup(function () {
  /*
  var domain = 'http://www.immobilien.net';
  var url = 'http://www.immobilien.net/Eigentumswohnungen/Wien/Seite1/treffer.aspx?iskauf=1&kaufpreisbis=100000';
  //var url = 'http://www.immobilien.net/Mietwohnungen/Wien/Seite1/treffer.aspx';
  var urls = getImmoUrls(url, {}, function (urls) {
    $.each(urls, function (index, url) {
      url = domain + url;
      getImmo(url, {});
    });
  });
  */

  //getImmo("http://www.immobilien.net/1030_Wien-Landstrasse/7102-1508/detail.aspx", {});
});

var getImmo = function (url, options) {  
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
    console.log("success");
    // Price
    var price = $(data).find(price_selector).text();
    price = price_extractor(price);
    // Image
    var image = $(data).find(image_selector).attr('src');
    Fiber(function() {
      var count = Data.find({url: url}).count();
      if (!count) {
        Data.insert({
          url: url,
          price: price,
          image: image,
        });
      }
    }).run();
  });
}

var getImmoUrls = function (url, options, callback) {  
  var link_selector = '.results > a';
  var data = $.get(url, {}, function(data) {
    var urls = [];
    $(data).find(link_selector).each(function () {
      urls.push($(this).attr('href'));
    });
    callback(urls);
  });
}