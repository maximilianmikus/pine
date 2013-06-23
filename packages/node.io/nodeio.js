nodeio = Npm.require("node.io");
var Future = Npm.require("fibers/future");

Meteor.methods({
  nodeioScrape: function (url, selector) {
    console.log(nodeio);
    console.log(url);
    console.log(selector);

    var future = new Future();
    var job = new nodeio.Job({
      input: false,
      run: function() {
        this.getHtml(url, function(err, $) {
          var res = [];
          $(selector).each(function(title) {
              res.push(title.innerHTML);
          });
          future.return(res);
        });
      }
    });
    nodeio.start(job, {}, function (err, output) {
      console.log("output", output);
      future.return(output);
    }, true);
    /*
    var scrape = NODEIO.scrape(function() {
      this.getHtml(url, function(err, $) {
        var res = [];
        $(selector).each(function(title) {
            res.push(title.innerHTML);
        });
        future.return(res);
      });
    }, false);
    */
    return future.wait();
  }
});