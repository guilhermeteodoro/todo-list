this.TodoList.module('Entities', function(Entities, App, Backbone, Marionette, $, _) {
  var API;

  Entities.Task = Backbone.Model.extend({
    urlRoot: '/api/v1/tasks',

    defaults: {
      title: '',
      done: false
    },

    validate: function(attrs, options) {
      switch (true) {
        case (!attrs.title): { return 'title is required'; }
        case (attrs.title.length < 2): { return 'title is too short, minimum 2 characters'; }
        case (attrs.title.length > 100): { return 'title is too long, maximum 100 characters'; }
      }
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
      var tasks = new Entities.TaskCollection
      tasks.fetch();

      return tasks;
    }
  };

  App.reqres.setHandler('task:entity', function() {
    return API.newTask();
  });

  App.reqres.setHandler('tasks:entities', function() {
    return API.getTasks();
  })
});