this.TodoList = (function(Backbone, Marionette) {
  var App = new Marionette.Application;

  App.addRegions({
    formRegion: '.form-region'
  });

  App.addInitializer(function() {
    App.module('FormApp').start();
  });

  App.reqres.setHandler('concern', function(concern) {
    App.Concerns[concern];
  });

  App.on('start', function() {
    App.started = true;

    this.startHistory();
  });

  return App;
})(Backbone, Marionette);
