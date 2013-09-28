var Ember = require('ember');

module.exports = Ember.Route.extend({
  model: function() {
    return ['red', 'yellow', 'blue'];
  }
});
