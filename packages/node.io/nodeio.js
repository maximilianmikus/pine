var nodeio = Npm.require("node.io");
var Future = Npm.require("fibers/future");
NODEIO = nodeio;

Meteor.methods({
  nodeioScrape: function (url, selector) {
    var future = new Future;
    var scrape = NODEIO.scrape(
      function() {
        this.getHtml(url, function(err, $) {
          var res = [];
          $(selector).each(function(title) {
              res.push(title.innerHTML);
          });
          future.return(res);
        });
      });
    return future.wait();
  }
});