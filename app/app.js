var Ember = require('ember');
var App = Ember.Application.create({
  Resolver: Ember.DefaultResolver.extend({
    resolveRoute: function(route) {
      var requireName = '/app/routes/'+route.name+'_route';
      try {
        return window['require'](requireName);
      }
      catch(e){
        return this._super(route);
      }
    }
  })
});

module.exports = App;
