// Always be subscribed to the data for the logged in user.
// Deps.autorun(function () {
//   dataHandle = Meteor.subscribe('data');
// });

Template.data.data = function () {
  return Data.find({});
};

Template.data.rendered = function () {
  
}

Meteor.startup(function () {
  console.log("startup");
  $('.thumbnails').masonry({
    columnWidth: 360,
    itemSelector: '.span4'
  });
})

/*
Template.hello.events({
  'click input' : function () {
    Meteor.apply('nodeioScrape', ['http://www.immobilien.net/Eigentumswohnungen/Wien/Seite1/treffer.aspx?iskauf=1&kaufpreisbis=100000', '.results > a'], function (err, res) {
      console.log(res);
    });
  }
});
*/