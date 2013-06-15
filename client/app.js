// Always be subscribed to the data for the logged in user.
// Deps.autorun(function () {
//   dataHandle = Meteor.subscribe('data');
// });

Template.hello.greeting = function () {
  return Session.get('current_results');
};

Template.hello.events({
  'click input' : function () {
    
  }
});

