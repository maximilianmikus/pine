Meteor.methods({
  saveData: function() {
    Meteor.apply('nodeioScrape', ['http://www.immobilien.net/Eigentumswohnungen/Wien/Seite1/treffer.aspx?iskauf=1&kaufpreisbis=100000', '.results > a'], function (err, res) {
      
    });
  }
});

Meteor.startup(function() {
  Meteor.apply('saveData', [], function (err, res) {
    console.log('dataSaved');
  });
});