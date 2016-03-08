this.TodoList.module('Entities', function(Entities, App, Backbone, Marionette, $, _){
  var API;

  Entities.Task = Backbone.Model.extend({
    urlRoot: '/api/v1/tasks'
  });

  Entities.TaskCollection = Backbone.Collection.extend({
    model: Entities.Task,
    url: '/api/v1/tasks'
  });

  API = {
    getTasks: function() {
      return (new Entities.TaskCollection).fetch();
    }
  };

  App.reqres.setHandler('tasks:entities', function(){
    return API.getTasks();
  })
});