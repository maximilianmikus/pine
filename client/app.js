Template.hello.greeting = function () {
  return Session.get('current_results');
};

Template.hello.events({
  'click input' : function () {
    Meteor.apply('nodeioScrape', ['http://www.immobilien.net/Eigentumswohnungen/Wien/Seite1/treffer.aspx?iskauf=1&kaufpreisbis=100000', '.results .PLZ'], function (err, res) {
      Session.set('current_results', res);
    });
  }
});

Meteor.startup(function () {
});