this.TodoList.module('TasksApp', function(TasksApp, App, Backbone, Marionette, $, _) {
  this.startWithParent = false;

  var API = {
    list: function() {
      return new TasksApp.List.Controller;
    }
  };

  TasksApp.on('start', function() {
    return API.list();
  });
});