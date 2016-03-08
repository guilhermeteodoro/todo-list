this.TodoList.module('Entities', function(Entities, App, Backbone, Marionette, $, _) {
  var API;

  Entities.Task = Backbone.Model.extend({
    urlRoot: '/api/v1/tasks',

    defaults: {
      title: '',
      done: false
    }
  });

  Entities.TaskCollection = Backbone.Collection.extend({
    model: Entities.Task,
    url: '/api/v1/tasks'
  });

  API = {
    newTask: function() {
      return new Entities.Task;
    },

    getTasks: function() {
      return (new Entities.TaskCollection).fetch();
    }
  };

  App.reqres.setHandler('task:entity', function() {
    return API.newTask();
  });

  App.reqres.setHandler('tasks:entities', function() {
    return API.getTasks();
  })
});